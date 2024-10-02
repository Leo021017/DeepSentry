<template>
	<view class="homepage">
		<view class="bar">
			<u-navbar :placeholder="true" bgColor="rgb(130, 130, 224)">
				<view slot="left"></view>
				<view slot="right" class="right">
					<view>
						<image src="../../../static/img/personal/edit.png"></image>
					</view>
					<view>
						<image src="../../../static/img/personal/set.png"></image>
					</view>
				</view>
			</u-navbar>
		</view>
		<view class="people">
			<view class="headImg">
				<image src="../../../static/img/personal/tx.png">
			</view>
			<view class="info">
				<view class="nick">
					<text>Leo</text>
					<view class="sex">
						<u-icon name="man" color="#ffffff" size="24"></u-icon>
					</view>
				</view>
				<view class="grade">
				</view>
			</view>
			<navigator url="../subpage/myPost">
				<view class="space">
					<text>个人资料</text>
					<u-icon name="arrow-right" color="#000000" size="20"></u-icon>
				</view>
			</navigator>
		</view>
		<view class="list">
			<view class="item">
				<view class="text">
					<text>45</text>
					<text>我的上传</text>
				</view>
				<u-line direction="col" color="#979797 " length="32rpx"></u-line>
			</view>
			<view class="item">
				<view class="text">
					<text>23</text>
					<text>通话守护</text>
				</view>
				<u-line direction="col" color="#979797 " length="32rpx"></u-line>
			</view>
			<view class="item">
				<view class="text">
					<text>13</text>
					<text>标记欺诈</text>
				</view>
				<u-line direction="col" color="#979797 " length="32rpx"></u-line>
			</view>
		</view>
		<view class="infos">
			<view class="set">
				<view>
					<image class="icon" src="../../../static/img/personal/pic03.png">
						<text @click="goto_us">关于我们</text>
						<image class="right" src="../../../static/img/personal/Clipped.png">
				</view>
				<view>
					<image class="icon" src="../../../static/img/personal/pic02.png">
						<text @click="goto_security">账号安全</text>
						<image class="right" src="../../../static/img/personal/Clipped.png">
				</view>
				<view>
					<image class="icon" src="../../../static/img/personal/pic05.png">
						<text @click="goto_feedback">帮助与反馈</text>
						<image class="right" src="../../../static/img/personal/Clipped.png">
				</view>
				<view>
					<image class="icon" src="../../../static/img/personal/pic04.png">
						<text @click="goto_settings">设置</text>
						<image class="right" src="../../../static/img/personal/Clipped.png">
				</view>
			</view>
		</view>
		
		<u-tabbar
		:placeholder="false"
		:value="tabar_value"
		:fixed="true"
		:safeAreaInsetBottom="false"
		>
			<u-tabbar-item text="首页" icon="home" name="home" @click="tab1"></u-tabbar-item>
			<u-tabbar-item text="发现" icon="photo" name="discovery" @click="tab2"></u-tabbar-item>
			<u-tabbar-item text="我的" name="account" icon="account"></u-tabbar-item>
		</u-tabbar>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 1,
				value1: 0,
				tabar_value: 'account'
			}
		},
		onLaunch() {
			uni.hideTabBar({})
		},
		onShow: function(){
			uni.hideTabBar({});
			if (typeof this.getTabBar === 'function' &&
				this.getTabBar()) {
				this.getTabBar().setData({
				  selected: 1 // 控制哪一项是选中状态
				})
			  }
		},
		methods: {
			tab1() {
				uni.$u.route({
					type: "tab",
					url: 'pages/main/index',
					params: {
					}
				});
			},
			tab2() {
				uni.$u.route({
					type: 'tab',
					url:'pages/main/discovery/discovery',
				})
			},
			goto_us() {
				uni.$u.route({
					url:'pages/main/subpage/us',
				})
			},
			goto_security() {
				uni.$u.route({
					url:'pages/main/subpage/security',
				})
			},
			goto_feedback() {
				uni.$u.route({
					url:'pages/main/common/feedbackIndex/feedbackIndex',
				})
			},
			goto_settings() {
				uni.$u.route({
					url:'pages/main/subpage/settings',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.homepage {
		width: 100%;
		height: 1624rpx;
		background: linear-gradient(1deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 60%, #3e52d5 100%);
		
		& text {
			color: #333333;
			font-family: PingFangSC-Semibold, PingFang SC;
		}

		.bar {
			.right {
				display: flex;

				& view {
					width: 52rpx;
					height: 52rpx;
					margin-left: 26rpx;
					border-radius: 26rpx;
					background: #F0EEFF;
					display: flex;
					justify-content: center;
					align-items: center;
					box-shadow: 0rpx -2rpx 2rpx 4rpx rgba(255, 255, 255, 0.5000), 0rpx 4rpx 4rpx 0rpx rgba(197, 183, 211, 0.5000), inset 0rpx 2rpx 6rpx 0rpx rgba(255, 255, 255, 0.5000);

					>image {
						width: 32rpx;
						height: 32rpx;
					}
				}
			}
		}

		.people {
			padding: 0 42rpx 28rpx 32rpx;
			display: flex;
			align-items: center;

			.headImg {
				>image {
					width: 166rpx;
					height: 166rpx;
					border-radius: 83rpx;
				}
			}

			.info {
				flex: 1;

				.nick {
					display: flex;

					>text {
						font-size: 36rpx;
						font-weight: 600;
						line-height: 50rpx;
					}

					.sex {
						width: 24rpx;
						height: 24rpx;
						border-radius: 12rpx;
						background: #61C9FD;
					}
				}

				.grade {
					display: flex;
					align-items: center;

					>view {
						display: flex;
						align-items: center;
						margin-right: 12rpx;

						& text {
							font-size: 20rpx;
							font-weight: 600;
							color: #FFFFFF;
							line-height: 28rpx;
							text-shadow: 0rpx 2rpx 4rpx rgba(0, 0, 0, 0.5000);
						}

						& image {
							width: 28rpx;
							height: 30rpx;
						}

						&:last-child {
							>image {
								width: 40rpx;
								height: 40rpx;
							}

							>text {
								margin-left: -6rpx;
							}
						}
					}
				}

				.userId {
					width: 220rpx;
					display: flex;
					background: #F5F5FF;
					border-radius: 8rpx;
					box-shadow: 0rpx 2rpx 6rpx 0rpx rgba(0, 0, 0, 0.1400), 0rpx -4rpx 6rpx 0rpx #FFFFFF;

					>image {
						width: 36rpx;
						height: 40rpx;
					}

					.number {
						flex: 1;
						display: flex;
						justify-content: center;

						>text {
							font-size: 24rpx;
							font-weight: 600;
							line-height: 40rpx;

							&:last-child {
								font-weight: 500;
								font-size: 22rpx;
								margin-left: 8rpx;
							}
						}
					}
				}
			}

			.space {
				display: flex;
				align-items: center;

				>text {
					font-size: 28rpx;
					line-height: 40rpx;
				}
			}
		}

		.list {
			width: 100%;
			display: flex;
			padding: 0 44rpx;
			box-sizing: border-box;

			.item {
				width: 33.34%;
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				margin-bottom: 20px;

				.text {
					display: flex;
					flex-direction: column;
					align-items: center;
					

					>text:first-child {
						font-size: 36rpx;
						font-family: CloudHeiChaoGBK;
						line-height: 48rpx;
						font-weight: 600;
					}

					>text:last-child {
						font-size: 24rpx;
						color: #999999;
						line-height: 34rpx;
					}
				}
			}
		}

		.infos {
			padding: 0 40rpx;

			.open-vip {
				width: 100%;
				height: 72rpx;
				background: linear-gradient(180deg, #F7E5B4 0%, #FFE6AF 2%, #EBC075 100%);
				border-radius: 49rpx;
				display: flex;
				align-items: center;
				margin-top: 36rpx;
				padding: 0 24rpx 0 34rpx;
				box-sizing: border-box;

				>image {
					width: 48rpx;
					height: 48rpx;
				}

				.text {
					flex: 1;
					font-size: 24rpx;
					line-height: 34rpx;
					margin-left: 14rpx;
				}

				.button {
					width: 128rpx;
					height: 42rpx;
					background: linear-gradient(90deg, #4D4D4D 0%, #151515 100%);
					border-radius: 22rpx;
					font-size: 22rpx;
					color: #FFDFA9;
					line-height: 42rpx;
					text-align: center;
				}
			}

			.tool {
				display: flex;
				width: 100%;
				height: 172rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 2rpx 22rpx 0rpx rgba(114, 118, 206, 0.2700);
				border-radius: 28rpx;
				justify-content: space-evenly;
				margin: 22rpx 0;

				>view {
					display: flex;
					flex-direction: column;

					& text {
						font-size: 22rpx;
						font-weight: 600;
						color: #666666;
						line-height: 32rpx;
						text-shadow: 0rpx 4rpx 14rpx rgba(222, 148, 247, 0.6000);
					}

					& image {
						width: 98rpx;
						height: 96rpx;
						margin-top: 10rpx;
					}
				}
			}

			.set {
				width: 100%;
				padding: 34rpx 24rpx 44rpx 34rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 2rpx 28rpx 0rpx rgba(142, 146, 230, 0.2700);
				border-radius: 28rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				box-sizing: border-box;

				>view {
					display: flex;
					align-items: center;
					margin-bottom: 40rpx;

					& text {
						flex: 1;
						font-size: 28rpx;
						line-height: 40rpx;
						margin-left: 30rpx;
					}

					.icon {
						width: 36rpx;
						height: 36rpx;
					}

					.right {
						width: 40rpx;
						height: 40rpx;
					}
				}
			}

			.service {
				background: #FFFFFF;
				box-shadow: 0rpx 2rpx 28rpx 0rpx rgba(142, 146, 230, 0.2700);
				border-radius: 28rpx;
				margin-top: 26rpx;
				padding: 34rpx 24rpx 44rpx 34rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				>view {
					display: flex;
					align-items: center;
					margin-bottom: 40rpx;

					& text {
						flex: 1;
						font-size: 28rpx;
						line-height: 40rpx;
						margin-left: 30rpx;
					}

					.icon {
						width: 36rpx;
						height: 36rpx;
					}

					.right {
						width: 40rpx;
						height: 40rpx;
					}

				}
			}
		}

	}
</style>