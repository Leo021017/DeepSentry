<template>
	<view style="padding-top: 200rpx;">
		<view @click="getContact" class="list">
			获取通讯录数据
		</view>
		<view @click="getSms" class="list">
			获取短息
		</view>
		<view @click="getCallLog" class="list">
			获取通话记录
		</view>

		<view style="padding: 30px;">
			{{datas}}
		</view>
	</view>
</template>

<script>
	import PhoneInfo from './PhoneInfo.js';
	const $phoneInfo = new PhoneInfo();
	export default {
		onLoad() {
			$phoneInfo.needPermission((res) => {});
			// $phoneInfo.initAll();
		},
		data() {
			return {
				datas: ""
			};
		},
		methods: {
			getContact() {
				const contact = $phoneInfo.readContacts()
				contact.then(res => {
					this.datas = res
				})
			},
			getSms() {
				if (uni.getSystemInfoSync().platform == "ios") {
					return
				}
				$phoneInfo.readSms().then(res => {
					this.datas = res
				})
			},
			getCallLog() {
				if (uni.getSystemInfoSync().platform == "ios") {
					return
				}
				$phoneInfo.readCallLog().then(res => {
					this.datas = res
				}).catch(err => {
					console.log(err);
				})
			}
		}
	}
</script>

<style lang="scss">
	.list {
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		padding: 0 20rpx 0 20rpx;
		color: #333333;
		border-bottom: 2rpx solid #adadad;
		text-align: center;
	}
</style>