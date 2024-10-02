<template>
	  <view class="u-page">
		  <!-- tableData:表格数组 数组里对象可自定义字段  -->
		  <view class="u-demo-block">
			  <cc-defineTable :tableData="tableArr"></cc-defineTable>
		  </view>
		  
		  
		  <view class="u-demo-block" style="border-radius: 12rpx;">
		  	  <text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">欺诈语音回放</text>
			  <view style="border-radius: 20rpx; margin-left: 1%;">
		  	  <audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
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
						'value': '语音通话检测'
					},
					{
						'name': '检测模型',
						'value': 'LRNet'
					},
					// {
					// 	'name': '敏感系数',
					// 	'value': '根据默认参数自动调整'
					// },
					{
						'name': '检测日期',
						'value': '2024-03-15'
					},
					{
						'name': '检测结果',
						'value': 'AI合成伪造'
					},
					{
						'name': '检测得分',
						'value': '8.56'
					},
				]

			},
		],
		value: 'home',
		current: {
			poster: 'https://blog-leo021017.oss-cn-beijing.aliyuncs.com/audio.png',
			name: '欺诈通话记录 2024-3-15',
			src: 'https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3',
		},
		audioAction: {
			method: 'pause'
		},
      chartData: {},
    };
  },
  onReady() {
    this.getServerData();
	const bgAudioManager = uni.getBackgroundAudioManager();
  },
  methods: {
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res2 = {
                    categories: ["伪造语音","深度伪造","声音伪造","AI欺诈","假冒明星"], 
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