# cc-defineTable

#### 使用方法

```使用方法
	
<!-- tableData:表格数组 数组里对象可自定义字段  -->
<cc-defineTable :tableData="tableArr"></cc-defineTable>

```

#### HTML代码实现部分
```html
<template>
	<view class="content">

		<!-- 自定义顶部搜索框 用于搜索跳转 skipUrl:跳转url为绝对路径 /pages开头 -->
		<cc-headSearch skipUrl="/pages/index/search"></cc-headSearch>

		<!-- table-list:表格数组 数组里对象可自定义字段  -->
		<cc-defineTable :tableData="tableArr"></cc-defineTable>


	</view>
</template>

<script>
	export default {
		components: {

		},

		data() {
			return {

				tableArr: [{
						'name': '基本信息',
						'list': [{
								'name': '品牌',
								'value': '苹果'
							},
							{
								'name': '型号',
								'value': 'iphoneX'
							},
							{
								'name': '尺寸',
								'value': '152 * 73 * 6.5mm'
							},
							{
								'name': '电池容量',
								'value': '3600mAh'
							},
							{
								'name': '重量',
								'value': '166g'
							}
						]

					},
					{
						'name': "详细信息",
						'list': [{
								'name': '品牌',
								'value': '苹果'
							},
							{
								'name': '型号',
								'value': 'iphoneX'
							},
							{
								'name': '尺寸',
								'value': '173 * 23 * 6.5mm'
							},
							{
								'name': '电池容量',
								'value': '3600mAh'
							},
							{
								'name': '重量',
								'value': '166g'
							}
						]
					}
				],

			}
		},
		mounted() {

		},
		methods: {



		}
	}
</script>

<style>
	page {

		background-color: #f7f7f7;
	}

	.content {
		display: flex;
		flex-direction: column;

	}
</style>
```
