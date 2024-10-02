#### 使用方法

```使用方法
<!-- 仿企查查标准信息列表组件 productList:数组信息  -->
<cc-bzListView :bzList="bzList"></cc-bzListView>
```

#### HTML代码实现部分
```html
<template>
	<view class="content">

		<div class="mui-content-padded">

			<!-- 仿企查查标准制定列表组件 -->
			<cc-bzListView :productList="bzList"></cc-bzListView>

		</div>
		<!-- 自定义等分底部菜单按钮 -->
		<view class="bottomV">
			<!-- upTextArr：上面标题数组 downTextArr：下面标题数组  selIndex：选择序列 selColor：选中颜色 @menuClick：按钮点击事件 -->
			<cc-BotMenu :upTextArr="uptextArr" :downTextArr="downTextArr" :selIndex="selIndex" selColor="orange"
				@menuClick="menuClick"></cc-BotMenu>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bzList: [],

				uptextArr: ['1', "2", "3", "4", '5'],
				downTextArr: ['国家标准', "行业标准", "省级标准", "团体标准", '企业标准'],
				selIndex: "0",
			}
		},
		mounted() {

			this.bzList = [{
				"id": "2",
				"isNewRecord": false,
				"comName": "123456",
				"socialCode": "123456",
				"comCode": "123456",
				"standardName": "药品网络经营质量规范",
				"standardType": "国家标准",
				"standardNo": "T/CAPC 010—2023",
				"createUnit": "中国医药商业协会、国药控股股份有限公司、上药控股有限公司、华润医药商业集团有限公司 等更多18家单位",
				"publishTime": "2021-01-03",
				"standardState": "即将实施",
				"recommended": "推荐"
			}, {
				"id": "1",
				"isNewRecord": false,
				"comName": "123456",
				"socialCode": "123456",
				"comCode": "123456",
				"standardName": "益生菌食品",
				"standardType": "团体标准",
				"standardNo": "T/CNFIA 131—2021",
				"createUnit": "北京科拓恒通生物技术股份有限公司、中国食品发酵工业研究院、北京热心肠生物技术研究院有限公司、内蒙古蒙牛乳业(集团)股份有限公司 等更多30家单位",
				"publishTime": "2021-01-02",
				"standardState": "现行",
				"recommended": "推荐"
			}];
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