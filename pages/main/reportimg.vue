<template>
	  <view class="u-page">
		  <!-- tableData:表格数组 数组里对象可自定义字段  -->
		  <view class="u-demo-block">
			  <cc-defineTable :tableData="tableArr"></cc-defineTable>
		  </view>
		  
		  
		  <view class="u-demo-block" style="border-radius: 12rpx;">
		  	  <text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">关键点标注</text>
			  <view style="border-radius: 20rpx;">
		  	  <image src="../../static/face.png" style="display:block; margin:0 auto;border-radius: 40rpx;"></image>
			  </view>
		  </view>
		  
		  
		  <view class="u-demo-block">
		  	  <qiun-title-bar title="多边形雷达图"/>
		  	  <text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">总体技术占比</text>
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
		src: '',
		inputValue: '',
		chartsDataRadar1:{},
		tableArr: [{
				'name': '基本信息',
				'list': [{
						'name': '所属类别',
						'value': '图片文件检测'
					},
					{
						'name': '检测模型',
						'value': 'UMMAFormer'
					},
					{
						'name': '敏感系数',
						'value': '46'
					},
					{
						'name': '检测日期',
						'value': '2024-03-23'
					},
					{
						'name': '检测结果',
						'value': 'AI合成伪造'
					},
					{
						'name': '检测得分',
						'value': '9.76'
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
  },
  methods: {
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res2 = {
                    categories: ["伪造人脸","深度伪造","图片伪造","AI欺诈","换脸","伪造明星"], 
                    series: [
                      {
                        name: "检测文件",
                        data: [170,130,170,130,187,172]
                      },
                    ]
                  };
        this.chartsDataRadar1=JSON.parse(JSON.stringify(res2))
      }, 500);
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
	
</style>