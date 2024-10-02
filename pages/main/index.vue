<template>
	<view class="u-page" style="background-color: #f3f4f6;">
		<!-- #ifndef APP-NVUE || MP-TOUTIAO -->
		    <view class="u-demo-block">
		        <u-swiper
					:list="list3"
					previousMargin="30"
					nextMargin="30"
					circular
					:autoplay="true"
					radius="10"
					bgColor="#ffffff"
					showTitle
					keyName="image"
		        ></u-swiper>
		    </view>
		    <!-- #endif -->
			
		<view class="u-demo-block" style="background-color: white; border-radius: 30rpx;">
			<page-nav :desc="desc"></page-nav>
		</view>

		<!-- <view class="u-demo-block">
		<u-button text="开启测试" @click="go2" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button>
		</view> -->
		
		<text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">最近检测结果</text>
		<view class="u-demo-block" style="background-color: white; border-radius: 25rpx;"
		@click="go_report">
		    <hm-balance-card :options="options"></hm-balance-card>
		</view>
		<br />
		
		<text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">安全工具</text>
		<view class="u-demo-block" style="background-color: white; border-radius: 25rpx;">	
		<u-grid
		        :border="true"
		        col="2"
				@click="clickView"
		>
		    <u-grid-item
		            v-for="(listItem,listIndex) in list"
		            :key="listIndex"
		    >
				<c-lottie
				    ref="cLottieRef"
				    :src="listItem.name"
				    @LoopComplete="onLoopComplete" 
				    width="90%" height='90%' :loop="true"
					style="margin-top: 6%;">
				</c-lottie>
		        <text class="grid-text">{{listItem.title}}</text>
		    </u-grid-item>
		</u-grid>
		<u-toast ref="uToast" />
		</view>
		
		<text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">诈骗关键词</text>
		<view class="u-demo-block" style="border-radius: 12rpx;">
			<view class="charts-box">
			    <qiun-data-charts 
			      type="word"
			      :opts="opts"
			      :chartData="chartData"
			    />
			  </view>
		</view>
		
		<view class="u-demo-block">
		<u-button text="查看更多数据" @click="go3" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" style="border-radius: 60rpx;"></u-button>
		</view>
		
		<u-tabbar
		:placeholder="false"
		:value="value"
		:fixed="true"
		:safeAreaInsetBottom="false"
		>
			<u-tabbar-item text="首页" icon="home" name="home"></u-tabbar-item>
			<u-tabbar-item text="发现" icon="photo" name="discovery" @click="tab1"></u-tabbar-item>
			<u-tabbar-item text="我的" name="account" icon="account" @click="tab2"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import HmBalanceCard from '@/components/hm-balance-card/index.vue'
	
	export default {
		components: { HmBalanceCard },
		data() {
			return {
				disabled: true,
				desc: '实时通信场景下检测深度伪造诈骗保护用户安全',
				value: 'home',
				list: [{
				    name: 'https://blog-leo021017.oss-cn-beijing.aliyuncs.com/img/open.json',
				    title: '诈骗预警'
				    },
				    {
				        name: 'https://blog-leo021017.oss-cn-beijing.aliyuncs.com/img/upload.json',
				        title: '文件上传'
				    },
				    {
				        name: 'https://blog-leo021017.oss-cn-beijing.aliyuncs.com/img/record.json',
				        title: '录屏检测'
				    },
				    {
				        name: 'https://blog-leo021017.oss-cn-beijing.aliyuncs.com/img/history.json',
				        title: '历史记录'
				    }
				],
				list3: [{
					image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.eJygAunzet9Jfeh4tE65AgHaDt?w=196&h=98&c=7&r=0&o=5&dpr=2&pid=1.7',
					title: '慈善诈骗',
				},{
					image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.WbJg6tpIayN7-3ldPkG76AHaFj?w=196&h=147&c=7&r=0&o=5&dpr=2&pid=1.7',
					title: '想不到标题'
				},{
					image: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.x717LGaf-GO8xEtxiNNOvQHaEK?w=196&h=110&c=7&r=0&o=5&dpr=2&pid=1.7',
					title: '标题三'
				}],
				chartData: {},
				      //您可以通过修改 config-ucharts.js 文件中下标为 ['word'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
			  opts: {
				color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
				padding: undefined,
				enableScroll: false,
				extra: {
				  word: {
					type: "normal",
					autoColors: false
				  }
				}
			  },
			  options: {
				bd: '无风险',
				main: '5326 5149 4497 1577',
				word: new Date().toISOString().slice(0, 10),
				num: '视频通话'
			  }
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
				  selected: 1 // 控制哪一项是选中状态
				})
			  }
		},
		 onReady() {
		    this.getServerData();
		 },
		methods: {
			tab1() {
				uni.$u.route({
					type: "tab",
					url: 'pages/main/discovery/discovery',
					params: {
					}
				});
			},
			tab2() {
				uni.$u.route({
					type: 'tab',
					url:'pages/main/resume/resume',
				})
			},
			go2() {
				uni.$u.route({
					url:'pages/main/subpage/test',
				})
			},
			go_report() {
				uni.$u.route({
					url:'pages/main/report',
				})
			},
			go3() {
				uni.$u.route({
					url:'pages/main/report/all-report',
				})
			},
			clickView(name) {
				// console.log(e, `点击了${e.title},数字为:${e.number}`);
				console.log(name)
				if(name == 0)
				{
					uni.$u.route({
						url:'pages/function/open',
					})
				}
				else if(name == 1)
				{
					uni.$u.route({
						url:'pages/function/upload',
					})
				}
				else if(name == 3)
				{
					uni.$u.route({
						url:'pages/function/history',
					})
				}
				else if(name == 2)
				{
					uni.$u.route({
						url:'pages/function/record',
					})
				}
			},
			getServerData() {
			  //模拟从服务器获取数据时的延时
			  setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					series: [
					  {
						 name: "伪造人脸",
						 textSize: 25,
						 data: undefined
					  },
					  {
						 name: "AI欺诈",
						 textSize: 35,
						 data: undefined
					  },
					  {
						 name: "虚假直播",
						 textSize: 20,
						 data: undefined
					  },
					  {
						 name: "深度伪造",
						 textSize: 25,
						 data: undefined
					  },
					  {
						 name: "账户转账",
						 textSize: 20,
						 data: undefined
					  },
					  {
						 name: "虚假视频会议",
						 textSize: 20,
						 data: undefined
					  },
					  {
						 name: "伪造绑架",
						 textSize: 20,
						 data: undefined
					  },
					  {
						 name: "视频通话",
						 textSize: 20,
						 data: undefined
					  },
					  // {
						 // name: "语音通话",
						 // textSize: 20,
						 // data: undefined
					  // }
					]
				  };
				this.chartData = JSON.parse(JSON.stringify(res));
			  }, 100);
			},
		}
	};
</script>

<style lang="scss">
    .grid-text {
        font-size: 14px;
        color: #909399;
        padding: 10rpx 0 20rpx 0rpx;
        /* #ifndef APP-PLUS */
        box-sizing: border-box;
        /* #endif */
    }
</style>
