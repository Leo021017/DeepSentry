<template>
	<view class="feedback-body">

		<text class="text-black">问题反馈和意见建议
			<text style="color: red;">*</text></text>
		<textarea placeholder="请描述您遇到的问题或对本产品的建议..." v-model="sendData.feedbackContent" class="feedback-textare" maxlength="-1"/>

		<view class="image-title">
			<text class="text-black">上传问题截图<text class="text-grey"> (选填，最多可上传6张)
				</text>
			</text>
			<view class="text-grey">{{ sendData.imgs.length }}/6</view>
		</view>
		<view class="filepicker">
			<uni-file-picker file-mediatype="image" :limit="6" return-type="array" v-model="sendData.imgs">
			</uni-file-picker>
		</view>

		<text class="text-black">联系方式<text class="text-grey">(选填)</text> </text>
		<input class="feedback-input" v-model="sendData.mobile" placeholder="请输入您的手机号" />
		<navigator url="../feedbackDetail/feedbackDetail" hover-class="hover">
			<view class="btn">
				<button :disabled="!sendData.feedbackContent" type="primary" class="btn">
					提交
				</button>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sendData: {
					feedbackContent: '', //反馈内容
					mobile: '', //联系方式
					imgs: []
				},
				btnLoading: false
			};
		},
		onLoad() {

		},
		methods: {}
	};
</script>

<style>
	.text-black {
		color: #303133;
		font-size: 32rpx;
	}

	.text-grey {
		color: #BCBCBC;
		font-size: 24rpx;
		margin-left: 15rpx;
	}

	.feedback-quick {
		padding-right: 10rpx;
		color: #606266;
		font-size: 32rpx;
	}

	.feedback-body {
		padding: 30rpx;
	}

	.feedback-textare {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		height: 266rpx;
		color: #303133;
		font-size: 28rpx;
		line-height: 2em;
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		border-radius: 20rpx;
		background-color: #F5F6F8;
	}

	.feedback-input {
		font-size: 28rpx;
		color: #303133;
		background-color: #F5F6F8;
		border-radius: 20rpx;
		height: 100rpx;
		min-height: 100rpx;
		padding: 0 30rpx;
		margin-top: 30rpx;
		margin-bottom: 60rpx;
	}

	.image-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #606266;

	}

	.filepicker {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}

	.btn {
		position: fixed;
		bottom: 0;
		left: 0 ;
		right: 0;
		margin: 30rpx 30rpx 100rpx 30rpx;
		background-color: #3e52d5;
		border-radius: 80rpx;
		color: #ffffff;
	}
</style>
