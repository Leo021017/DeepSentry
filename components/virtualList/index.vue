<template>
	<scroll-view :style="{'height':  scrollHeight}" class="scroll-box" scroll-y="true" @scroll="scroll" refresher-enabled="true" :refresher-triggered="triggered" :refresher-threshold="100" @refresherrefresh="onPulling" @scrolltolower="onScrollBottom">
		<view class="virtualList_header">
			<slot name="header"></slot>
		</view>
		<view :style='[{"padding":paddingStyle}]'>
			<slot></slot>
			<empty v-if="isShowEmpty" @emptyclick="emptyClick"></empty>
		</view>
		<view>
			<slot name="footer"></slot>
			<view v-if="!isDownLoading && upLoadType!=3" class="ayi-upwarp" :style="{'background':'transparent','color':'gray'}">
				<view v-show="upLoadType==1">
					<view class="upwarp-progress ayi-rotate" :style="{'border-color':'gray'}"></view>
					<view class="upwarp-tip">加载中 ...</view>
				</view>
				<view v-if="upLoadType==2" class="upwarp-nodata">-- END --</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	const DIRECTION_TYPE = {
		FRONT: 'FRONT', // scroll up 
		BEHIND: 'BEHIND' // scroll down 
	}
	const CALC_TYPE = {
		INIT: 'INIT',
		FIXED: 'FIXED',
		DYNAMIC: 'DYNAMIC'
	}
	const LEADING_BUFFER = 0
	import { debounce, validatenull } from "./tools.js"
	import empty from "@/components/empty/empty.vue"
	export default {
		components: {
			empty
		},
		props: {
			showList: {
				type: Array,
				default: () => {
					return []
				}
			},
			dataKey: {
				type: [Number, String],
				required: true
			},
			keeps: {
				type: [Number, String],
				default: 20
			},
			height: {
				type: [Number, String],
				default: '',
			},
			estimateSize: {
				type: Number,
				default: 50
			}
		},
		data() {
			return {
				offset: 0,
				direction: '',
				sizes: new Map(),
				firstRangeAverageSize: 0,
				firstRangeTotalSize: 0,
				lastCalcIndex: 0,
				calcType: CALC_TYPE.INIT,
				fixedSizeValue: 0,
				range: {
					start: 0,
					end: 0,
					padFront: 0,
					padBehind: 0
				},
				paddingStyle: "0",
				isFirst: false,
				slotHeaderSize: 0,
				clientSize: 0, //滚动的可视区域
				windowHeight: 0, //整个视窗高度
				//下拉刷新相关
				triggered: false,
				hasNext: false,
				noMoreSize: 5,
				isShowEmpty: false,
				upLoadType: 0, // 上拉加载状态: 0(loading前), 1loading中, 2没有更多了,显示END文本提示, 3(没有更多了,不显示END文本提示)
				isLoadFinish: true, //是否上拉完成,默认完成
				isDownLoading: false
			}
		},
		computed: {
			scrollHeight() {
				if (this.height) {
					return this.toPx(this.height) + 'px'
				} else {
					return "100%"
				}
			}
		},
		watch: {
			'showList.length'() {
				let value = this.getUniqueIdFromDataSources()
				this.sizes.forEach((v, key) => {
					if (!value.includes(key)) {
						this.sizes.delete(key)
					}
				})
				this.handleDataSourcesChange()
				if (this.isFirst) {
					this.getDataSources()
				}
			},
			"range.start": {
				handler(newVal) {
					this.getDataSources()
				},
				immediate: false
			},
			"range.padFront": {
				handler(newVal) {
					this.paddingStyleChange()
				},
				immediate: false
			},
			"range.padBehind": {
				handler(newVal) {
					this.paddingStyleChange()
				},
				immediate: false
			},
		},
		created() {
			this.buffer = Math.round(this.keeps / 3) // 推荐1/3保持
			this.checkRange(0, this.keeps - 1)
			uni.$on('item_resize', this.onItemResized)
			this.isFirst = true
		},
		mounted() {
			this.windowHeight = uni.getSystemInfoSync().windowHeight
			this.getHeaderBound()
			let _ = this
			this.$nextTick(() => {
				uni.createSelectorQuery().in(_).select(".scroll-box").boundingClientRect(data => {
					_.clientSize = data?.height
				}).exec();
			})
		},
		methods: {
			checkRange(start, end) {
				const keeps = this.keeps
				const total = this.showList.length
				if (total <= keeps) {
					start = 0
					end = this.getLastIndex()
				} else if (end - start < keeps - 1) {
					//如果范围长度小于keeps，则根据末尾进行校正
					start = end - keeps + 1
				}
				if (start == '0') {
					debounce(() => { //防止频繁触发
						this.updateRange(start, end)
					}, 50)
				}
				if (this.range.start != start) {
					this.updateRange(start, end)
				}
			},
			paddingStyleChange() {
				const { padFront, padBehind } = this.range
				this.paddingStyle = `${padFront}px 0px ${padBehind}px` + ""
			},
			isFixedType() {
				return this.calcType === CALC_TYPE.FIXED
			},
			isBehind() {
				return this.direction === DIRECTION_TYPE.BEHIND
			},
			isFront() {
				return this.direction === DIRECTION_TYPE.FRONT
			},
			updateRange(start, end) {
				this.range.start = start
				this.range.end = end
				this.range.padFront = this.getPadFront()
				this.range.padBehind = this.getPadBehind()
				//this.callUpdate(this.getRange())
			},
			getPadFront() { //前面总便宜量
				if (this.isFixedType()) {
					return this.fixedSizeValue * this.range.start
				} else {
					return this.getIndexOffset(this.range.start)
				}
			},
			// return total behind offset
			getPadBehind() {
				const end = this.range.end
				const lastIndex = this.getLastIndex()

				if (this.isFixedType()) {
					return (lastIndex - end) * this.fixedSizeValue
				}

				// if it's all calculated, return the exactly offset
				if (this.lastCalcIndex === lastIndex) {
					return this.getIndexOffset(lastIndex) - this.getIndexOffset(end)
				} else {
					// if not, use a estimated value
					return (lastIndex - end) * this.getEstimateSize()
				}
			},
			getIndexOffset(givenIndex) {
				//返回给定索引的滚动偏移量，是否可以在这里进一步提高效率？虽然呼叫频率很高，但它只是数字的叠加
				if (!givenIndex) {
					return 0
				}
				let offset = 0
				let indexSize = 0
				for (let index = 0; index < givenIndex; index++) {
					indexSize = this.sizes.get(this.showList[index][this.dataKey])
					offset = offset + (typeof indexSize === 'number' ? indexSize : this.getEstimateSize())
				}
				// 记住上次计算索引
				this.lastCalcIndex = Math.max(this.lastCalcIndex, givenIndex - 1)
				this.lastCalcIndex = Math.min(this.lastCalcIndex, this.getLastIndex())
				return offset
			},
			getEstimateSize() {
				return this.isFixedType() ? this.fixedSizeValue : (this.firstRangeAverageSize || this.estimateSize)
			},
			getLastIndex() {
				return this.showList.length - 1
			},
			scroll(e) {
				const { scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY } = e.detail
				const offset = scrollTop
				const clientSize = this.clientSize
				const scrollSize = scrollHeight
				if (offset < 0 || (offset + clientSize > scrollSize + 1) || !scrollSize) {
					return
				}
				this.handleScroll(offset)
			},
			handleScroll(offset) {
				this.direction = offset < this.offset ? DIRECTION_TYPE.FRONT : DIRECTION_TYPE.BEHIND
				this.offset = offset
				if (this.direction === DIRECTION_TYPE.FRONT) {
					this.handleFront()
				} else if (this.direction === DIRECTION_TYPE.BEHIND) {
					this.handleBehind()
				}
			},
			handleFront() {
				const overs = this.getScrollOvers()
				// should not change range if start doesn't exceed overs
				if (overs > this.range.start) {
					return
				}
				// move up start by a buffer length, and make sure its safety
				const start = Math.max(overs - this.buffer, 0)
				this.checkRange(start, this.getEndByStart(start))
			},
			handleBehind() {
				const overs = this.getScrollOvers()
				// range should not change if scroll overs within buffer
				if (overs < this.range.start + this.buffer) {
					return
				}

				this.checkRange(overs, this.getEndByStart(overs))
			},
			getEndByStart(start) {
				//开始时返回结束
				const theoryEnd = start + this.keeps - 1
				const truelyEnd = Math.min(theoryEnd, this.getLastIndex())
				return truelyEnd
			},
			getScrollOvers() {
				// return the pass overs according to current scroll offset
				// if slot header exist, we need subtract its size
				const offset = this.offset - this.slotHeaderSize
				if (offset <= 0) {
					return 0
				}
				if (this.isFixedType()) {
					return Math.floor(offset / this.fixedSizeValue)
				}

				let low = 0
				let middle = 0
				let middleOffset = 0
				let high = this.showList.length

				while (low <= high) {
					// this.__bsearchCalls++
					middle = low + Math.floor((high - low) / 2)
					middleOffset = this.getIndexOffset(middle)

					if (middleOffset === offset) {
						return middle
					} else if (middleOffset < offset) {
						low = middle + 1
					} else if (middleOffset > offset) {
						high = middle - 1
					}
				}

				return low > 0 ? --low : 0
			},
			getUniqueIdFromDataSources() {
				let indexArr = []
				for (let i = 0; i < this.showList.length; i++) {
					indexArr.push(i);
				}
				return indexArr
			},
			onItemResized(id, size) {
				this.saveSize(id, size)
			},
			// save each size map by id
			saveSize(id, size) {
				this.sizes.set(id, size)
				// we assume size type is fixed at the beginning and remember first size value
				// if there is no size value different from this at next comming saving
				// we think it's a fixed size list, otherwise is dynamic size list
				if (this.calcType === CALC_TYPE.INIT) {
					this.fixedSizeValue = size
					this.calcType = CALC_TYPE.FIXED
				} else if (this.calcType === CALC_TYPE.FIXED && this.fixedSizeValue !== size) {
					this.calcType = CALC_TYPE.DYNAMIC
					// it's no use at all
					delete this.fixedSizeValue
				}

				// calculate the average size only in the first range
				if (this.calcType !== CALC_TYPE.FIXED && typeof this.firstRangeTotalSize !== 'undefined') {
					if (this.sizes.size < Math.min(this.keeps, this.showList.length)) {
						this.firstRangeTotalSize = [...this.sizes.values()].reduce((acc, val) => acc + val, 0)
						this.firstRangeAverageSize = Math.round(this.firstRangeTotalSize / this.sizes.size)
					} else {
						// it's done using
						delete this.firstRangeTotalSize
					}
				}
			},
			// in some special situation (e.g. length change) we need to update in a row
			// try goiong to render next range by a leading buffer according to current direction
			handleDataSourcesChange() {
				let start = this.range.start

				if (this.isFront()) {
					start = start - LEADING_BUFFER
				} else if (this.isBehind()) {
					start = start + LEADING_BUFFER
				}

				start = Math.max(start, 0)

				this.updateRange(this.range.start, this.getEndByStart(start))
			},
			getDataSources() {
				this.isFirst = true
				const dataSources = []
				const { start, end } = this.range
				for (let index = start; index <= end; index++) {
					let temp = this.showList[index]
					dataSources.push(temp)
				}
				this.$emit("dataSources", dataSources)
				this.paddingStyleChange()
			},
			getHeaderBound() {
				let _ = this
				this.$nextTick(() => {
					uni.createSelectorQuery().in(_).select(".virtualList_header").boundingClientRect(data => {
						_.slotHeaderSize = data?.height
					}).exec();
				})
			},
			//number,rpx,upx,px,% --> px的数值
			toPx(num) {
				if (typeof num === "string") {
					if (num.indexOf('px') !== -1) {
						if (num.indexOf('rpx') !== -1) { // "10rpx"
							num = num.replace('rpx', '');
						} else if (num.indexOf('upx') !== -1) { // "10upx"
							num = num.replace('upx', '');
						} else { // "10px"
							return Number(num.replace('px', ''))
						}
					} else if (num.indexOf('%') !== -1) {
						// 传百分比,则相对于windowHeight,传"10%"则等于windowHeight的10%
						let rate = Number(num.replace("%", "")) / 100

						return this.windowHeight * rate
					}
				}
				return num ? uni.upx2px(Number(num)) : 0
			},
			onScrollBottom() {
				if (this.upLoadType != '2' && this.upLoadType != '3' && this.isLoadFinish) {
					this.isLoadFinish = false
					this.upLoadType = 1
					this.$emit("loadMore")
				}
			},
			onPulling() {
				this.triggered = true
				this.isShowEmpty = false
				this.upLoadType = 1
				this.isDownLoading = true
				this.$emit("pull")
			},
			errRef() {
				this.endUpScroll(false)
			},
			endSuccessRef(dataSize, pageObj, hasNext) {
				let _this = this;
				let isShowNoMore; // 是否已无更多数据
				if (!validatenull(dataSize)) {
					let pageNum = pageObj.num; // 当前页码
					let pageSize = pageObj.size; // 每页长度
					if (dataSize < pageSize || hasNext === false) {
						// 返回的数据不满一页时,则说明已无更多数据
						_this.hasNext = false;
						if (dataSize === 0 && pageNum === 1) {
							// 如果第一页无任何数据且配置了空布局
							isShowNoMore = false;
							_this.isShowEmpty = true
						} else {
							// 总列表数少于配置的数量,则不显示无更多数据
							let allDataSize = (pageNum - 1) * pageSize + dataSize;
							if (allDataSize < _this.noMoreSize) {
								isShowNoMore = false;
							} else {
								isShowNoMore = true;
							}
							_this.isShowEmpty = false
						}
					} else {
						// 还有下一页
						isShowNoMore = false;
						_this.hasNext = true;
						_this.isShowEmpty = false
					}
					// 隐藏上拉
					_this.endUpScroll(isShowNoMore);
				}
			},
			emptyClick() {
				this.$emit("emptyClick")
			},
			endUpScroll(isShowNoMore) {
				if (isShowNoMore != null) { // isShowNoMore=null,不处理下拉状态,下拉刷新的时候调用
					if (isShowNoMore) {
						this.hasNext = false
						this.upLoadType = 2
					} else {
						this.upLoadType = this.hasNext ? 0 : 3;
					}
				}
				this.triggered = false
				this.isLoadFinish = true
				this.isDownLoading = false
			}
		},
		destroyed() {
			uni.$off('item_resize')
		}
	}
</script>
<style scoped lang="scss">
	/* 上拉加载区域 */
	.ayi-upwarp {
		box-sizing: border-box;
		min-height: 110rpx;
		padding: 30rpx 0;
		text-align: center;
		clear: both;

		/*提示文本 */
		.upwarp-tip,
		.upwarp-nodata {
			display: inline-block;
			font-size: 28rpx;
			vertical-align: middle;
			/* color: gray; 已在style设置color,此处删去*/
		}

		.upwarp-tip {
			margin-left: 16rpx;
		}

		/*旋转进度条 */
		.upwarp-progress {
			display: inline-block;
			width: 32rpx;
			height: 32rpx;
			border-radius: 50%;
			border: 2rpx solid gray;
			border-bottom-color: transparent !important;
			/*已在style设置border-color,此处需加 !important*/
			vertical-align: middle;
		}

		/* 旋转动画 */
		.ayi-rotate {
			animation: ayiUpRotate 0.6s linear infinite;
		}
	}

	@keyframes ayiUpRotate {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
