<template>
	  <view class="u-page">
		  <!-- tableData:表格数组 数组里对象可自定义字段  -->
		  <view class="u-demo-block">
			  <cc-defineTable :tableData="tableArr"></cc-defineTable>
		  </view>
		  
		  <view class="u-demo-block">
			  <text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">欺诈通话回放</text>
			  <view class="page-body">
			  	<view class="page-section">
			  		<video id="myVideo" src="https://blog-leo021017.oss-cn-beijing.aliyuncs.com/qq.mp4" @error="videoErrorCallback" :danmu-list="danmuList"
					style="border-radius: 40rpx; margin-left: 5%;"
			  		    enable-danmu danmu-btn controls>
			          </video>
			  	</view>
			  </view>
		  </view>
		  
		  <view class="u-demo-block" style="border-radius: 12rpx;">
					  <view style="border-radius: 20rpx;">
			  <image src="../../static/delay-qq.png" style="display:block; margin:0 auto;border-radius: 40rpx; height:7ch; width: 60ch; margin-left: -10ch;"></image>
			  <text style="display:block; font-size: 70%; font-weight: bold; color: gray; margin-top: 0ch; margin-left: 5%;">平均延迟为40ms，网络延迟情况良好</text>
					  </view>
		  </view>

		  
		  <view class="u-demo-block" style="border-radius: 12rpx;">
		  	  <text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">关键点标注</text>
			  <view style="border-radius: 20rpx;">
		  	  <image src="../../static/qq-face.png" style="display:block; margin:0 auto;border-radius: 40rpx; width: 75%"></image>
			  </view>
		  </view>
		  
		  <view class="u-demo-block" style="width: 100%;">
		  	<qiun-data-charts 
		  	  type="arcbar"
		  	  :opts="opts"
		  	  :chartData="chartData"
		  	  :canvas2d="true"
		  	  canvasId="UeqaEjpgUMjLwArgTPQcmOzIciAvybEQ"
		  	/>
		  </view>
		  
		  
		  <view class="u-demo-block">
		  	  <qiun-title-bar title="多边形雷达图"/>
		  	  <text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">结果分析</text>
		  	  <view class="charts-box" style="height: 300px; background-color: white; border-radius: 100rpx;
		  	  	border: 2px solid #ccc;
		  	  	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0);
		  	  	margin-top: 2ch;">
		  	    <qiun-data-charts type="radar" :opts="{padding: [25,25,25,25], legend:{show: false, position: 'bottom'},extra:{radar:{border:true}}}" :chartData="chartsDataRadar1"/>
		  	  </view>
		  </view>
	  </view>
</template>

<script>
export default {
  data() {
    return {
		title: 'video',
		opts: {
		color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
		padding: undefined,
		title: {
		  name: "45",
		  fontSize: 35,
		  color: "#3e52d5"
		},
		subtitle: {
		  name: "美颜化妆指数",
		  fontSize: 25,
		  color: "#3e52d5"
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
		},
		src: '',
		inputValue: '',
		chartsDataRadar1:{},
		tableArr: [{
				'name': '基本信息',
				'list': [{
						'name': '所属类别',
						'value': '诈骗预警检测'
					},
					{
						'name': '检测模型',
						'value': '多特征融合综合检测'
					},
					{
						'name': '视频时长',
						'value': '00:11'
					},
					{
						'name': '检测日期',
						'value': '2024-07-28'
					},
					{
						'name': '检测结果',
						'value': '存在深度伪造'
					},
					{
						'name': '检测得分',
						'value': '94.6'
					},
				]

			},
		],
		value: 'home',
      chartData: {},
    };
  },
  onReady() {
    this.getServerData();
	this.getServerData2()
	this.videoContext = uni.createVideoContext('myVideo')
  },
  methods: {
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res2 = {
                    categories: ["小段伪造","深度伪造","视频通话","美颜化妆","换脸","网络延迟"], 
                    series: [
                      {
                        name: "检测文件",
                        data: [80,200,200,140,200,100]
                      },
                    ],
                  };
        this.chartsDataRadar1=JSON.parse(JSON.stringify(res2))
      }, 500);
    },
	getServerData2() {
	  //模拟从服务器获取数据时的延时
	  setTimeout(() => {
	    //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
	    let res2 = {
					series: [
					  {
						name: "美颜化妆指数",
						color: "#3e52d5",
						data: 0.45
					  }
					]
	              };
	    this.chartData=JSON.parse(JSON.stringify(res2))
	  }, 0);
	},
	bindInputBlur: function (e) {
		this.inputValue = e.target.value
	},
	bindButtonTap: function () {
		var that = this
		uni.chooseVideo({
			sourceType: ['album', 'camera'],
			maxDuration: 60,
			camera: ['front', 'back'],
			success: function (res) {
				this.src = res.tempFilePath
			}
		})
	},
	videoErrorCallback: function (e) {
		console.log('视频错误信息:')
		console.log(e.target.errMsg)
	},
  }
};
</script>

<style scoped>
  /* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
  page {
          background-color: #f7f7f7;
      }
  
      .content {
          display: flex;
          flex-direction: column;
  
      }
	.charts-box {
	  width: 100%;
	  height: 300px;
	}

	/* .score {
		border: 3px solid #3e52d5;
		border-radius: 20rpx;
		padding: 5px 10px;
		margin-left: 20%;
		font-size: 24px;
		font-weight: bold;
		font-family: Arial, sans-serif;
		width: 19%;
	} */
	
</style>