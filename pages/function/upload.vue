<template>
	<view class="u-page">
		<!-- <view class="u-demo-block">
		<u-subsection :list="list" mode="button" :current="curNow" @change="sectionChange" fontSize="15"></u-subsection>
		</view> -->

		<view class="u-demo-block">
		<upload-demo type="video" v-if="curNow === 0"></upload-demo>
		<!-- #ifdef H5 || APP-PLUS || MP-WEIXIN -->
		<upload-demo type="file" v-if="curNow === 1"></upload-demo>
		<!-- #endif -->
		<!-- <upload-demo type="image" :list="fileList" disabled v-if="curNow === 2"></upload-demo> -->
		<upload-demo type="image" v-if="curNow === 2"></upload-demo>
		</view>
		
		<view class="u-demo-block">
			<u--input
			    placeholder="请输入检测内容url"
			    border="surround"
			    v-model="inputValue"
			    @change="InputChange"
				clearable
				shape="circle"
			  ></u--input>
		</view>
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">请选择检测参数</text>
			
			<div>
			<text class="u-block__title">检测模型</text>
			<view class="u-demo-block__content">
				<view class="u-page__checkbox-item">
					<u-checkbox-group
						v-model="checkboxValue"
						@change="checkboxChange"
					>
						<u-checkbox
							:customStyle="{marginRight: '16px'}"
							v-for="(item, index) in checkboxList"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</view>
			
			<br />
			<u-line></u-line>
			</div>
			
			<!-- <view class="u-demo-block">
			<text class="u-block__title">敏感系数</text>
			<u-slider v-model="SliderValue" :showValue="true"></u-slider>
			</view> -->
			
			<u-line></u-line>
			
			<view class="u-demo-block" v-if="curNow === 0">
<!-- 			<text class="u-block__title">视频帧长度</text> -->
			<!-- <br />
			<u-cell
			    :border="true"
			    title=""
			> -->
			
				<!-- <u-number-box
				    slot="right-icon"
				    v-model="numberBoxValue"
				    step="1"
				    @change="valChange"
					:max="5"
					:min="1"
				>
				</u-number-box> -->
			</u-cell>
			</view>
			
			<view class="u-demo-block">
				<text class="u-block__title">选填</text>
				<u--textarea v-model="textAreaValue" placeholder="您在什么情况下收到这份文件" ></u--textarea>
			</view>
		</view>
		
		<view class="u-demo-block">
		<u-button text="开始检测" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" @click="start_check" style="border-radius: 60rpx;"></u-button>
		</view>
	</view>
</template>

<script>
import UploadDemo from '@/components/UploadDemo';

export default {
	components: {
		UploadDemo
	},
	data() {
		return {
			// fileList: [
			// 	{
			// 		"fileName": "test.jpg",
			// 		"fileKey": "7c524b43bf1ff89aeda1eb439aad3268.jpg",
			// 		"filePath": "https://blog-leo021017.oss-cn-beijing.aliyuncs.com/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210911212653.jpg",
			// 		"url": "https://blog-leo021017.oss-cn-beijing.aliyuncs.com/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210911212653.jpg",
			// 		"name": "test.jpg",
			// 		"fileType": "image"
			// 	}
			// ],
			value: 'upload',
			list: [{name: '视频'}, {name: '音频'}, {name: '图片'}],
			curNow: 0,
			checkboxList: [{
					name: '多特征融合检测',
					disabled: false
				},
				{
					name: '小段伪造检测',
					disabled: false
				}
			],
			SliderValue: 30,
			numberBoxValue: 3,
			textAreaValue: "",
			checkboxValue: [],
			inputValue: ''
		};
	},
	onLaunch() {
		uni.hideTabBar({})
	},
	onShow: function(){
		uni.hideTabBar({});
		if (typeof this.getTabBar === 'function' &&
			this.getTabBar()) {
			this.getTabBar().setData({
			  selected: 3 // 控制哪一项是选中状态
			})
		  }
	},
	methods: {
		sectionChange(index) {
			this.curNow = index;
		},
		checkboxChange(n) {
			// console.log('change', n);
		},
		start_check() {
			console.log("选择的敏感系数是 " + this.SliderValue)
			console.log("选择的模型有 " + this.checkboxValue)
			uni.$u.route({
				url: 'pages/main/result',
				params: {
				}
			});
		},
		valChange(e) {
			console.log('当前值为: ' + e.value)
		},
		InputChange(e) {
			console.log('change', e);
		}
	},
};
</script>

<style>

</style>
