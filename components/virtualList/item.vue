<template>
	<view class="ayi_virtualList_item">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			virtualIndex: {
				type: [String, Number],
				default: 0
			},
			virtualItem: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		data() {
			return {

			}
		},
		watch:{
			"virtualIndex"(val){
				this.getSize()
			}
		},
		created() {
			this.getSize()
		},
		methods: {
			getSize() {
				let _ = this
				this.$nextTick(() => {
					uni.createSelectorQuery().in(_).select(".ayi_virtualList_item").boundingClientRect(data => {
						uni.$emit('item_resize', _.virtualIndex, data?.height)
					}).exec();
				})
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
