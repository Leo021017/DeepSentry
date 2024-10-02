<template>

	<view style="margin-top: -10px;">

		<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item, index) in seniorList" :key="item.id"
			@click="goProDetail(item)">

			<!-- 头部视图 -->
			<view style="margin-left: 0px;">
				<!-- 高管名称 -->
				<view class="topTitleV">{{item.personName}}</view>

				<!-- 标签 -->
				<view
					style="display: flex; flex: 1; flex-wrap: wrap; margin-top: 0px; margin-left: -8px; height: 28px; width:calc(100vw-62px)">

					<!-- 自定义了一个data-id的属性,可以通过js获取到它的值!  hover-class 指定按下去的样式类-->
					<view class="cellView" v-for="(tagItem, index) in bindTag(item)" :key="index">
						{{tagItem}}
					</view>


				</view>

				<!-- 简介 -->
				<view style="display: flex; margin-top: 2px">

					<view style="color: #999999;font-size: 13px;margin-top: 2px; width: 33px;"> {{'情景:' + ''}}
					</view>
					<view
						style="color: #333333;font-size: 13px;margin-top: 4px; margin-left: 3px; width: calc(100vw - 108px); background-color:white; max-height:26px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
						{{ ZJNoEmptyString(item.resume) + "" }}
					</view>
				</view>

				<view @click="showResumeAlert(ZJNoEmptyString(item.resume))"
					style="color: #FFA01B; text-align: right; height: 32px; line-height: 24px; font-size: 12px;margin-top: -20px; width: calc(100vw - 48px);">
					更多</view>


			</view>


			<view style="display: flex;">
				
				<view style="width: 54%;">
					<ccUpDownText class="infoText" upText='文件类型' :downText='ZJNoEmptyString(item.type)'>
					</ccUpDownText>
					
					<ccUpDownText class="infoText" upText='检测模型' :downText='ZJNoEmptyString(item.model)'>
					</ccUpDownText>
									
					<ccUpDownText class="infoText" upText='检测日期' :downText='ZJNoEmptyString(item.publichTime)'>
					</ccUpDownText>
				</view>
				
				<view style="width: 46%;">
					<ccUpDownText class="infoText" upText='文件大小' :downText='ZJNoEmptyString(item.size)'>
					</ccUpDownText>
					
					<ccUpDownText class="infoText" upText='敏感系数' :downText='ZJNoEmptyString(item.sense_param)'>
					</ccUpDownText>					
					
				</view>
				
			</view>



		</view>

	</view>

</template>


<script>
	import ccUpDownText from "./ccUpDownText.vue"

	export default {
		components:{
			ccUpDownText
		},
		props: {

			seniorList: {
				type: Array,
				default () {
					return []
				}
			}



		},
		data() {
			return {

			}
		},
		methods: {
			
			ZJNoEmptyString(obj) {
			
				let str = '--';
				if (typeof(obj) == "undefined" || (obj) === null || (obj) === '') {
					return str;
				}
				return obj + "";
			},
			// 弹出简介
			showResumeAlert(info) {

				uni.showModal({
					title: "简介",
					content: info,
					showCancel: false

				})
			},
			goProDetail(item) {


			},
			bindTag(item) {

				let tmpStr = (item.tag);
				if (tmpStr.length > 0) {

					return tmpStr.split("|");



				} else {

				}
				return []
			},


		}
	}
</script>

<style scoped>
	.uni-list-cell {
		flex-direction: column;
		margin-top: 10px;
		background-color: white;
		padding: 8px 12px;


	}

	.topTitleV {

		align-items: center;
		height: 26px;
		width: calc(100vw - 28px - 66px);
		align-self: center;


		color: #333333;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 500;
		font-size: 16px;


		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	.rigFlagV {

		display: flex;
		border-radius: 0px;
		border: 1rpx solid #8A59A0;
		color: #8A59A0;
		text-align: center;


		align-self: center;

		font-size: 10px;
		height: 22px;
		line-height: 22px;
		padding: 0px 3px;
	}


	.cellView {
		margin-top: 3px;
		margin-left: 8px;
		height: 22px;
		line-height: 22px;
		text-align: center;
		border-radius: 2px;
		padding: 0px 4px !important;
		font-size: 12px;

		color: #8A59A0;
		background: #F3F4F6;
	}

	.titleV {

		color: #888888;
		font-size: 13px;
		height: 26px;
		line-height: 26px;
		width: auto !important;
	}

	.detailV {
		margin-left: 4px;
		color: #333333;
		font-size: 13px;
		height: auto;
		line-height: 26px;
		width: calc(100vw - 108px);
	}
</style>