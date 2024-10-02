<template>

	<view class="myupView">

     
		<view class="uptext"> {{ upText}}
		</view>
		
		
		
		<view class="list-textDetail" :style="{'color':fgColor}">{{ downText}}
		</view>

	</view>

</template>

<script>
	export default {
		props: {
			
			upText: {
				type: String,
				default: ""
			},
			downText: {
				type: String,
				default: ""
			},
			fgColor: {
				type: String,
				default: "#4F4F53"
			}

		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.myupView {
		display: flex;
		flex-direction: column;
		width: auto;
		height: 40px;
		margin-top: 8px;
		
	}
	
	.uptext {
		line-height: 24px;
		width: auto;
		font-size: 11px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		height: 24px;
		color: #888888;;
		text-align: left;
		margin-top: 2px;
		

	}

	.list-textDetail {
		line-height: 20px;
		width: auto;
		height: 26px;
		font-size: 12px;
		text-align: left;
		
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #4F4F53;
		
	}
</style>
