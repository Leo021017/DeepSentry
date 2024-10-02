<template>
	<view>
		<view v-for="(item, index) in couponList" :key="index" class="coupon_box">
			<view class="left">
				<view class="left_top">
					<text class="hui" v-if="item.type === '1'">无风险</text>
					<text class="hui" v-if="item.type === '0'" style="background-color: red;">有风险</text>
					<text class="hui_name">{{item.title}}</text>
				</view>
				<view class="left_bottom">
					<text>检测日期：{{item.date}}</text>
				</view>
			</view>
			<view class="right">
				<view class="money" v-if="item.type === '1'">{{item.score}}</view>
				<view class="money" v-if="item.type === '0'" style="color: red;">{{item.score}}</view>
				<text>欺诈分数</text>
			</view>

			<view class="bottom">
				<!-- <view v-for="(row, indexs) in item.condition" :key="indexs"> -->
				<u-icon name="../../../../static/icon/video.svg"></u-icon>
				<!-- </view> -->

				<view class="receiveBtn" v-if="item.type === '1'"
					@tap="onreceive(item, index)">查看详情</view>
					
				<view class="receiveBtn" v-if="item.type === '0'"
				style="background-color: red;"
					@tap="onreceive(item, index)">查看详情</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},

		components: {},
		props: {
			colors: {
				type: String
			},
			couponList: {
				type: Array
			}
		},
		methods: {
			onreceive(item, index) { //领取优惠券
				uni.$u.route({
					url: 'pages/main/report-wx',
					params: {
					}
				});
			}

		}	
	};
</script>
<style lang="scss" scoped>

	.coupon_box {
		margin: 30upx;
		padding: 20upx;
		box-shadow: 0upx 0upx 10upx #ddd;
		position: relative;
		border-radius: 10upx;
		padding-bottom: 35upx;
		overflow: hidden;
	}

	/*#ifndef APP-VUE*/
	// .coupon_box .left {
	// 	display: flex;
	// 	align-items: center;
	// 	flex-wrap: wrap;
	// 	border-bottom: 1upx solid #eee;
	// 	padding-bottom: 20upx;
	// 	position: relative;
	// }
	/*#endif*/
	
	/*#ifndef APP-VUE*/
	// .coupon_box .left .ylq {
	// 	width: 60upx;
	// 	height: 45upx;
	// 	position: absolute;
	// 	top: 0;
	// 	right: 140upx;
	// }
	/*#endif*/

	.coupon_box .left .hui {
		width: 15%;
		// height: 40upx;
		font-size: 60%;
		color: #fff;
		background-color: #3e52d5;
		border-radius: 14rpx;
		line-height: 170%;
		text-align: center;
		display: inline-block;
		transform: 10%;
	}

	.coupon_box .left .left_top {
		display: block;
		font-size: 120%;
		font-weight: bold;
	}

	.left_top .hui_name {
		line-height: 200%;
		// height: 60upx;
		margin-left: 3%;
		display: inline-block;
		font-size: 80%;
	}
	
	.left_bottom {
		font-size: 80%;
		font-weight: 500;
		color: #333;
		// height: 60upx;
		// height: 0%;
		line-height: 300%;
	}
	
	.coupon_box .right {
		position: absolute;
		right: 3%;
		top: 15%;
		text-align: center;
	}

	.coupon_box .right .money {
		font-size: 125%;
		margin-bottom: 2%;
		font-weight: bold;
		color: #3e52d5;
	}

	.coupon_box .right text {
		font-size: 75%;
		color: #999;
		// font-weight: bold;
	}

	.coupon_box .bottom {
		// height: 60upx;
		// height: 40px;
		// line-height: 60px;
		display: flex;
		align-content: flex-start;
		// font-size: 24upx;
		// margin-top: 10upx;
		margin-top: 1%;
	}

	/*#ifndef APP-VUE*/
	.coupon_box .bottom view {
		// margin-right: 20upx;
		// margin-right: 10%;
		// color: #888;
	}
	/*#endif*/

	.receiveBtn {
		position: absolute;
		left: 77%;

		width: 20%;
		// height: 24px;
		line-height: 200%;

		border-radius: 12rpx;
		background-color: #3e52d5;
		color: white !important;

		font-size: 85%;
		text-align: center;
		margin-top: 0.4%;
	}
	 
</style>