<template>
	<view class="u-page">
		<view class="u-demo-block">
			<qiun-data-charts 
			  type="arcbar"
			  :opts="opts"
			  :chartData="chartData"
			  :canvas2d="true"
			  canvasId="UeqaEjpgUMjLwArgTPQcmOzIciAvybEQ"
			/>
		</view>
		
		<view class="u-demo-block">
			<cc-seniorListView :seniorList="seniorList"></cc-seniorListView> 
		</view>
		
		<view class="u-demo-block">
		<h4>深度伪造概率</h4>
		<view class="u-demo-block__content">
			<view style="font-size: 250%; color: #3e52d5; font-weight: bolder; margin-left: 33%;" >
				95.4%
			</view>
		</view>
		</view>
		
		<view class="u-demo-block">
		<u-button text="查看报告" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" style="border-radius: 60rpx;" @click="open_report"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 'home',
				chartData: {},
				  //您可以通过修改 config-ucharts.js 文件中下标为 ['arcbar'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				  opts: {
					color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
					padding: undefined,
					title: {
					  name: "100%",
					  fontSize: 35,
					  color: "#2fc25b"
					},
					subtitle: {
					  name: "检测进度",
					  fontSize: 25,
					  color: "#666666"
					},
					extra: {
					  arcbar: {
						type: "default",
						width: 12,
						backgroundColor: "#E9E9E9",
						startAngle: 0.75,
						endAngle: 0.25,
						gap: 2,
						linearType: "custom"
					  }
					}
				  }
				};
			},
		onReady() {
			this.getServerData();
		  },
		 mounted() {
		            this.seniorList = [{
		                    "personName": "视频-2024-07-28",
		                    // "resume": "接到了一个电话，对方声称是我的一个老同学，让我借他钱",
		                    "type": "视频",
		                    "size": "5343.6KB",
		                    "model": "小段伪造检测模型",
		                    "sense_param": "76",
		                    "shares": "13%",
		                    "publichTime": "2024-07-28",
		                    "tag": "文件上传",
		                }
		            ];
		        },
		methods: {
			open_report () {
				uni.$u.route({
					url: 'pages/main/report-file-loc',
					// params: {
					// 	name: 'lisa'
					// }
				});
			},
			getServerData() {
			  //模拟从服务器获取数据时的延时
			  setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					series: [
					  {
						name: "检测进度",
						color: "#2fc25b",
						data: 1.0
					  }
					]
				  };
				this.chartData = JSON.parse(JSON.stringify(res));
			  }, 500);
			},
		}
	}
</script>

<style>
    page {
        /* background: #f3f4f6; */
    }

    .content {
        display: flex;
        flex-direction: column;

    }

    .mui-content-padded {
        margin: 0px 14px;

    }

    .bottomV {

        /* 设置视图置顶 */
        display: flex;
        flex-direction: row;
        position: fixed;
        margin-top: calc(100vh - 168px);
        height: 60px;
        z-index: 9999 !important;
        width: 100vw;
        background-color: white;
        padding-left: 0px;
        padding-bottom: 20px;
    }
</style>