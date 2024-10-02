<template>
	<view class="header">
		<view @click="clickView(item)" ref="headerBox" :span="11" class="header_box" v-for="(item,index) in arr"
			:style="`background:${viewBackgroundColor[index]}`">
			<view :key="index" class="header_box_content">
				<text>{{item.title}}</text>
				<view class="header_box_content_num">
					{{item.number}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			viewBackgroundColor: {
				type: Array,
				default: () => ([])
			},
			arr: {
				type: Array,
				default: () => ([])
			}
		},
		data() {
			return {

			};
		},
		methods: {
			clickView(e) {
				this.$emit('clickView', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	/*#ifndef APP-NVUE*/
	.header {
		background-color: #fff;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);

		.header_box {
			display: flex;
			justify-content: left;
			border-radius: 10px;
			margin: 7px;
			height: 80px;
			width: 90%;
			transition: transform 0.3s ease;

			.header_box_content {
				margin-top: 10%;

				text {
					font-size: 12px;
					color: #F5F5F5;
					margin-left: 10px;
				}

				.header_box_content_num {
					margin-left: 10px;
					color: white;
					font-size: 20px;
				}
			}
		}

		.header_box:hover {
			transform: scale(1.05);
		}

	}
	/* #endif */
</style>