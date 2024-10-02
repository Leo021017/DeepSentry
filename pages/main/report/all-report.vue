<template>
    <view class="u-page" style="background-color: #f3f4f6;">
		
		<!-- <qiun-title-bar title="地图"/>
		<text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">全国诈骗事件热点图</text>
		<view class="charts-box" style="height: 400px; background-color: white; border-radius: 100rpx;
			border: 2px solid #ccc;
			box-shadow: 5px 5px 5px rgba(0, 0, 0, 0);
			margin-top: 2ch;">
			<div class="map">
			  <div id="myEchartChina" class="map-echart" ref="myEchartChina"></div>
			</div>
		</view> -->
		
		<qiun-title-bar title="多边形雷达图"/>
		<text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">总体技术占比</text>
		<view class="charts-box" style="height: 300px; background-color: white; border-radius: 100rpx;
			border: 2px solid #ccc;
			box-shadow: 5px 5px 5px rgba(0, 0, 0, 0);
			margin-top: 2ch;">
		  <qiun-data-charts type="radar" :opts="{padding: [25,25,25,25], legend:{show: false, position: 'bottom'},extra:{radar:{border:true}}}" :chartData="chartsDataRadar1"/>
		</view>
		
		
		<qiun-title-bar title="基本折线区域图"/>
		<text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">欺诈事件发送频率在时间上的趋势图</text>
		<view class="charts-box" style="height: 300px; background-color: white; border-radius: 100rpx;
			border: 2px solid #ccc;
			box-shadow: 5px 5px 5px rgba(0, 0, 0, 0);
			margin-top: 2ch;">
		  <qiun-data-charts type="area" :opts="{padding: [50,50,50,20], extra:{map:{mercator:true}}}" :chartData="chartsDataArea1"/>
		</view> 
		
		<qiun-title-bar title="词云图"/>
		<text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black; margin-left: 5%; margin-top: 0ch;">诈骗关键词</text>
			<view class="charts-box" style="height: 300px; background-color: white; border-radius: 100rpx;
				border: 2px solid #ccc;
				box-shadow: 5px 5px 5px rgba(0, 0, 0, 0);
				margin-top: 2ch;">
				<qiun-data-charts type="word" :chartData="chartsDataWord1"/>
		</view>
  </view>
</template>

<script>
//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
import demodata from '@/mockdata/demodata.json';
import mapdata from '@/mockdata/mapdata.json';
import * as echarts from 'echarts'

export default {
  mounted() {
    this.getMapData();
  },
  props: {},
  data() {
    return {	  
      chartsDataArea1:{},	  
      chartsDataRadar1:{},
      chartsDataWord1:{},
      chartsDataMap1:{},
	  searchForm: {
	    ip: "",
	    moduleType: 0,
	    moduleName: "",
	  },
	  myChart: null,
    };
  },
  onReady() {
    //模拟从服务器获取数据
    this.getServerData()
  },
  methods: {
	  getMapData() {
	      this.loadMapChina();
	    },
	  
	  loadMapChina() {
	      this.myChart = echarts.init(this.$refs['myEchartChina']); // 初始化
	      const uploadedDataURL = require(`../../../static/china.json`);
	      echarts.registerMap("中国", uploadedDataURL);
	  
	      var option = {
	        title: {
	          text: " ",//表头
	          x: "center",
	        },
	        dataRange: {
	          min: 0,
	          max: 3000,
	          text: ["高", "低"],
	          realtime: true,
	          calculable: true,
	          color: ["darkred" , "red", "orangered", "yellow"],//颜色
	        },
	        series: [
	          {
	            name: "中国热力图",
	            type: "map",
	            map: "中国",
	            mapLocation: {
	              y: 0,
	            },
	            itemStyle: {
	              emphasis: { label: { show: false } },
	            },
	            data: [
	              { name: "北京市", value: 1200 },
	              { name: "天津市", value: 800 },
	              { name: "河北省", value: 1500 },
	              { name: "山西省", value: 600 },
	              { name: "内蒙古自治区", value: 400 },
	              { name: "辽宁省", value: 900 },
	              { name: "吉林省", value: 700 },
	              { name: "黑龙江省", value: 1000 },
	              { name: "上海市", value: 1300 },
	              { name: "江苏省", value: 1800 },
	              { name: "浙江省", value: 2000 },
	              { name: "安徽省", value: 1200 },
	              { name: "福建省", value: 1600 },
	              { name: "江西省", value: 900 },
	              { name: "山东省", value: 2200 },
	              { name: "河南省", value: 1700 },
	              { name: "湖北省", value: 1500 },
	              { name: "湖南省", value: 1300 },
	              { name: "广东省", value: 2500 },
	              { name: "广西壮族自治区", value: 1100 },
	              { name: "海南省", value: 300 },
	              { name: "重庆市", value: 1000 },
	              { name: "四川省", value: 2000 },
	              { name: "贵州省", value: 800 },
	              { name: "云南省", value: 1300 },
	              { name: "西藏自治区", value: 100 },
	              { name: "陕西省", value: 1200 },
	              { name: "甘肃省", value: 600 },
	              { name: "青海省", value: 300 },
	              { name: "宁夏回族自治区", value: 200 },
	              { name: "新疆维吾尔自治区", value: 500 },
	              { name: "台湾省", value: 400 },
	              { name: "香港特别行政区", value: 200 },
	              { name: "澳门特别行政区", value: 100 },
	            ],
	          },
	        ],
	      };
	  
	      this.myChart.setOption(option);
	    },
    getServerData() {
      setTimeout(() => {
      	//因部分数据格式一样，这里不同图表引用同一数据源的话，需要深拷贝一下构造不同的对象
      	//开发者需要自行处理服务器返回的数据，应与标准数据格式一致，注意series的data数值应为数字格式
		let res1 = {
		    series: [
		      {
		        name: "音频欺诈",
		        data: [35,8,25,37,4,20,40,33,91]
		      },
			  {
			    name: "视频欺诈",
			    data: [70,40,65,100,44,68,75,20]
			  },
			  {
			    name: "其他欺诈",
			    data: [100,80,95,100,112,92,23,11,98]
			  },
		    ]
		  };
      	this.chartsDataArea1=JSON.parse(JSON.stringify(res1))
		let res2 = {
		            categories: ["语音伪造","换脸","伪造明星","AI欺诈","伪造人脸","深度伪造"],
		            series: [
		              {
		                name: "检测文件",
		                data: [90,110,165,195,187,172]
		              },
		            ]
		          };
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
			  {
				 name: "语音通话",
				 textSize: 20,
				 data: undefined
			  }
			]
		  };
      	this.chartsDataRadar1=JSON.parse(JSON.stringify(res2))
      	this.chartsDataWord1=JSON.parse(JSON.stringify(res));
      	this.chartsDataMap1={series:mapdata.features}
      }, 100);
    }
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.charts-box {
  width: 100%;
  height: 300px;
}
.map {
  width: 100vw;
  height: 100vw;
}
.map-echart {
  height: 100vw;
  width: 100vw;
}
</style>
