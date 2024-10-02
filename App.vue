<script>
	export default {
		onLaunch: function() {
				console.log('App Launch')
				uni.onPushMessage((res) => {
					console.log("收到推送消息：",res) //监听推送消息
					plus.push.createMessage(res.title,res.content);
				})
				uni.getPushClientId({
					success: (res) => {
						let push_clientid = res.cid
						console.log('客户端推送标识:',push_clientid)
					},
					fail(err) {
						console.log(err)
					}
				})
			},
		onShow: function() {
		},
		onHide: function() {
			
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	@import "common/demo.scss";
	
</style>
