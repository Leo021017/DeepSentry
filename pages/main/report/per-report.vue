<template>
	<view class="u-page" style="background-color: #f3f4f6;">
		
		<view class="u-demo-block" style="background-color: white; border-radius: 100rpx; 
		border: 2px solid #ccc;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0);">
			<qiun-data-charts 
			      type="pie"
			      :opts="opts1"
			      :chartData="chartData1"
			    />
		</view>	
		
		
		<view class="u-demo-block" style="background-color: white; border-radius: 100rpx;
		border: 2px solid #ccc;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0);">
			<qiun-data-charts
			      type="ring"
			      :opts="opts2"
			      :chartData="chartData2"
			    />
		</view>
		
		
		<view class="u-demo-block" style="background-color: white; border-radius: 100rpx;
		border: 2px solid #ccc;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0);">
		<view style="display: grid; grid-template-columns: 1fr 1fr;">
			<view style="margin-bottom: 10%;">
				<l-liquid :current.sync="modelVale1" :percent="target1" style="margin-left: 15%; margin-top: 10%; margin-bottom: 10%;"
				outline="true"
				waveColor="#007aff">
					<text>{{modelVale1}}%</text>
				</l-liquid>
				<text style="font-size: 100%; color: #3e52d5; margin-left: 26%;">非欺诈占比</text>
			</view>
			<view style="margin-bottom: 10%;">
				<l-liquid :current.sync="modelVale2" :percent="target2" style="margin-left: 15%; margin-top: 10%; margin-bottom: 10%;"
				outline="true"
				waveColor="#007aff">
					<text>{{modelVale2}}%</text>
				</l-liquid>
				<text style="font-size: 100%; color: #3e52d5; margin-left: 32%;">欺诈占比</text>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
import modal from '../../../uni_modules/uview-ui/libs/config/props/modal';
export default {
  data() {
    return {
	  modelVale1: 0,
	  target1: 73,
	  modelVale2: 0,
	  target2: 27,
      chartData1: {},
	  chartData2: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['ring'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts1: {
		  color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
		  padding: [5,5,5,5],
		  enableScroll: false,
		  extra: {
			pie: {
			  activeOpacity: 0.5,
			  activeRadius: 10,
			  offsetAngle: 0,
			  labelWidth: 15,
			  border: true,
			  borderWidth: 3,
			  borderColor: "#FFFFFF",
			  linearType: "custom"
			}
		  }
		},
	  opts2: {
        rotate: false,
        rotateLock: false,
        color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
        padding: [5,5,5,5],
        dataLabel: true,
        enableScroll: false,
        legend: {
          show: true,
          position: "right",
          lineHeight: 25
        },
        title: {
          name: "文件上传",
          fontSize: 15,
          color: "#666666"
        },
        // subtitle: {
        //   name: "70%",
        //   fontSize: 25,
        //   color: "#7cb5ec"
        // },
        extra: {
          ring: {
            ringWidth: 60,
            activeOpacity: 0.5,
            activeRadius: 10,
            offsetAngle: 0,
            labelWidth: 15,
            border: true,
            borderWidth: 3,
            borderColor: "#FFFFFF",
            linearType: "custom"
          }
        }
      }
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
        let res1 = {
            series: [
              {
                data: [{"name":"通话检测","value":60},{"name":"录屏检测","value":15},{"name":"文件上传","value":25}]
              }
            ]
          };
        this.chartData1 = JSON.parse(JSON.stringify(res1));
		let res2 = {
		    series: [
		      {
		        data: [{"name":"视频","value":45},{"name":"音频","value":35},{"name":"图片","value":20}]
		      }
		    ]
		  };
		this.chartData2 = JSON.parse(JSON.stringify(res2));
      }, 100);
    },
  }
};
</script>

<style scoped>
  /* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
 .charts-box {
    width: 100%;
    height: 300px;
  }
</style>