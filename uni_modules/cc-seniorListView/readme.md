# cc-seniorListView
#### 使用方法

```使用方法
<!-- 仿企查查天眼查高管信息列表组件 seniorList:高管数组信息 -->
<cc-seniorListView :seniorList="seniorList"></cc-seniorListView>
```

#### HTML代码实现部分
```html
<template>
	<view class="content">

		<div class="mui-content-padded">

			<!-- 仿企查查天眼查高管信息列表组件 seniorList:高管数组信息 -->
			<cc-seniorListView :seniorList="seniorList"></cc-seniorListView>

		</div>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				seniorList: [],

				uptextArr: ['1', "2", "3", "4", '5'],
				downTextArr: ['国家标准', "行业标准", "省级标准", "团体标准", '企业标准'],
				selIndex: "0",
			}
		},
		mounted() {

			this.seniorList = [{
					"id": "3",
					"isNewRecord": false,
					"socialCode": "123456",
					"comCode": "123456",
					"comName": "高管公司",
					"personId": "125",
					"personName": "李娅云",
					"personNameEn": "c",
					"resume": "京东集团首席合规官，监督合规、法律事务及内部审计以及信息安全。李女士于2007年12月加入京东。担任目前职位之前，李女士担任合规管理部副总裁，基于对假冒产品「零容忍」政策制定了一项强烈的道德与合规计划，通过推出防欺诈培训、举报方案及内部欺诈调查框架，推广全公司诚信文化。李女士亦负责建立有效的合规及内部控制，以满足美国上市的要求。在担任合规职位之前，李女士担任法律团队的负责人。李女士持有中国人民大学法学硕士学位及中欧国际工商学院电子商务管理硕士学位。2020年12月21日，京东集团发布人员任命公告称，京东集团首席合规官李娅云将接任京东数字科技CEO，向京东集团CEO刘强东汇报。",
					"job": "高层管理",
					"sex": "女",
					"salary": "900000",
					"education": "本科",
					"shares": "13%",
					"tenure": "3年",
					"publichTime": "2023-08-23",
					"tag": "股权出质",
					"comNum": "3",
					"sortNum": "3",
					"updateTime": "3",
					"remark": "3"
				},
				{
					"id": "3",
					"isNewRecord": false,
					"socialCode": "123456",
					"comCode": "123456",
					"comName": "京东公司",
					"personId": "125",
					"personName": "余睿",
					"personNameEn": "c",
					"resume": "余睿，男，1982年出生，先后取得中国政法大学法学学士学位、中欧国际工商学院高级工商管理硕士(EMBA)学位，中国国籍。余睿先生于2008年7月加入京东集团，曾于京东集团担任多个管理职位(包括零售及物流业务);2011年1月至2015年5月先后担任京东物流华中区域及华东区域负责人，协助京东物流在中国各地开展业务;2016年6月至2018年3月曾担任1号店首席执行官，随后自2018年3月至2019年2月担任京东集团客户体验与服务部负责人;2019年2月至2020年12月，其亦担任京东集团首席人力资源官。余睿先生现担任京东物流执行董事兼首席执行官。此简介更新于2022-10-18",
					"job": "高层管理",
					"sex": "男",
					"salary": "900000",
					"education": "硕士",
					"shares": "6%",
					"tenure": "3年",
					"publichTime": "2023-08-23",
					"tag": "股权出质",
					"comNum": "3",
					"sortNum": "3",
					"updateTime": "3",
					"remark": "3"
				},
			];
		},
		methods: {
			// 按钮点击事件
			menuClick(tag) {
				// 点击序列赋值
				this.selIndex = tag;

			}
		}
	}
</script>

<style>
	page {
		background: #f3f4f6;

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
```