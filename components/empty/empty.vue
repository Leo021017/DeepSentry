<template>
	<view class="ayi-empty" :class="{ 'empty-fixed': isFixed }" :style="{ 'z-index': option.zIndex, top: option.top }">
		<view>
			<image v-if="!validatenull(icon)" class="empty-icon" :src="icon" mode="widthFix" />
		</view>
		<view v-if="!validatenull(tip)" class="empty-tip">{{ tip }}</view>
		<view v-if="!validatenull(btnText)" class="empty-btn" @click="emptyClick">{{ btnText }}</view>
	</view>
</template>

<script>
	/**
	 * option={icon:'',tip:'',btnText:'',fixed:''}
	 */
	export default {
		props: {
			option: {
				type: Object,
				default () {
					return {};
				}
			}
		},
		computed: {
			// 图标
			icon() {
				if (!this.validatenull(this.option.icon)) {
					return this.option.icon
				}
				return ''
			},
			// 文本提示
			tip() {
				if (this.validatenull(this.option.tip)) {
					return '~ 暂无相关数据 ~'
				}
				return this.option.tip
			},
			// 按钮文本
			btnText() {
				if (!this.validatenull(this.option.btnText)) {
					return this.option.btnText
				}
				return ''
			},
			isFixed() {
				if (this.option.fixed === false) {
					return false
				}
				return true
			}
		},
		methods: {
			// 点击按钮
			emptyClick() {
				this.$emit('emptyclick');
			},
			validatenull(val) {
				if (typeof val == 'boolean') {
					return false;
				}
				if (typeof val == 'number') {
					return false;
				}
				if (val instanceof Array) {
					if (val.length == 0) return true;
				} else if (val instanceof Object) {
					if (JSON.stringify(val) === '{}') return true;
				} else {
					if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
					return false;
				}
				return false;
			}
		}
	};
</script>

<style scoped lang="scss">
	/* 无任何数据的空布局 */
	.ayi-empty {
		box-sizing: border-box;
		width: 100%;
		padding: 100rpx 50rpx;
		text-align: center;

		&.empty-fixed {
			z-index: 99;
			position: absolute;
			/*transform会使fixed失效,最终会降级为absolute */
			top: 100rpx;
			left: 0;
		}

		.empty-icon {
			width: 280rpx;
			height: 280rpx;
		}

		.empty-tip {
			margin-top: 20rpx;
			font-size: 24rpx;
			color: gray;
		}

		.empty-btn {
			display: inline-block;
			margin-top: 40rpx;
			min-width: 200rpx;
			padding: 18rpx;
			font-size: 28rpx;
			border: 1rpx solid #e04b28;
			border-radius: 60rpx;
			color: #e04b28;
		}

		.empty-btn:active {
			opacity: 0.75;
		}
	}
</style>
