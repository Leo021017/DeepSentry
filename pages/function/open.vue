<template>
	<view style="background-color: #3e52d5;">
	<view class="u-demo-block"  style="background-color: #3e52d5;">
		<!-- <u--image src="../../static/img/alert.png"></u--image> -->
		<c-lottie
		    ref="cLottieRef"
		    src='https://blog-leo021017.oss-cn-beijing.aliyuncs.com/security.json'
		    @LoopComplete="onLoopComplete" 
		    width="90%" height='90%' :loop="true">
		</c-lottie>
	</view>
  <view class="u-page" style="border-top-left-radius: 35rpx; background-color: white; border-top-right-radius: 35rpx;">
	  
	<u-toast ref="uToast"></u-toast>
	  
    <div class="item">
      <u-icon size="40" name="../../static/icon/video.svg"></u-icon>
      <div class="text">
        <text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black;">视频通话预警</text>
		<text class="u-demo-block__title" style="font-size: 80%;">准确识别并预警AI合成视频通话</text>
      </div>
      <div class="switch">
        <u-switch
			v-model="value1"
			@change="switch_change1"
			space="3"
		></u-switch>
      </div>
    </div>
    <br />
    <div class="item">
      <u-icon size="40" name="../../static/icon/telephone.svg"></u-icon>
      <div class="text">
        <text class="u-demo-block__title" style="font-size: 100%; font-weight: 800; color: black;">语音通话预警</text>
        <text class="u-demo-block__title" style="font-size: 80%;">准确识别并预警AI合成语音通话</text>
      </div>
      <div class="switch">
        <u-switch
        	v-model="value2"
        	@change="switch_change1"
			space="3"
        ></u-switch>
      </div>
    </div>
    <br />
    <div class="item">
	  <u-icon size="40" name="../../static/icon/msg.svg"></u-icon>
      <div class="text">
        <text class="u-demo-block__title" style="font-size: 100%; font-weight: bold; color: black;">短信预警</text>
        <text class="u-demo-block__title" style="font-size: 80%;">准确识别并预警诈骗短信</text>
      </div>
      <div class="switch">
        <u-switch
        	v-model="value3"
        	@change="switch_change1"
			space="3"
        ></u-switch>
      </div>
    </div>
  </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value1: false,
	  value2: false,
	  value3: false,
    }
  },
  methods: {
	  getRecordObj(){
	      if(!this.recordObj) this.recordObj = uni.requireNativePlugin("me-record")
	      return this.recordObj
	  },
	  // 开始录制
	  startRecord(isAudio){
	      let option = {
	          ratio: 3, // 视频清晰度, 建议取值: 1,2,3,4,5,6; 越大越清晰, 默认3 (值越大内存要求越高, 太高容易内存溢出闪退)
	          frame: 30, // 视频帧率, 建议取值: 15,20,25,30,60; 越大越流畅, 默认30
	          isAudio: isAudio // 是否录制声音, 默认false
	      }
	      this.getRecordObj().startRecord(option, res=>{
	          if(res.code == 0){
	          }else{
	          }
	      })
	  },
	  // 停止录制
	  stopRecord () {
	      let res = this.getRecordObj().stopRecord()
	      if(res.code == 0){
	          console.log("本地视频路径:" + res.path) // 可继续调uni.uploadFile()上传至服务器
	      }else{
	      }
	  },
	  
	  testGet () {
	  	  const intervalId = setInterval(function(){
	  		const testModule = uni.requireNativePlugin('tele_listen')
	  		testModule.getPhoneStateJson(
	  			{
	  				a: 3,
	  				b: 1
	  			},
	  			e => {
	  				const response = JSON.stringify(e);
	  				const res = JSON.parse(response);
	  				var code = res["code"];
					console.log(code)
	  				if (code == 2) {
						uni.vibrateLong({
							success: function () {
								console.log('success');
							}
						});
						plus.push.createMessage("DeepSentry持续保护您的通话！","");
	  					uni.showToast({
	  						title: "开始监听！",
	  						icon: "none",
							duration: 3000
	  					});
						// setTimeout(() => {
						// 	  plus.push.createMessage("检测到欺诈，请注意安全！","");
						// 	  const bgAudioManager = uni.getBackgroundAudioManager();
						// 	  bgAudioManager.src = 'https://blog-leo021017.oss-cn-beijing.aliyuncs.com/alert.mp3';
						// 	  uni.vibrateLong({
						// 		success: function () {
						// 			console.log('success');
						// 		}
						// 	  });
						// 	  // setTimeout(() => {
						// 	  // 	  this.stopRecord()
						// 	  // }, 3000);
						// }, 23000);
	  			// 		clearInterval(intervalId);
	  				} 
	  			}
	  		);
	  	  }, 1200);
	  },
	  switch_change(e) {
		  if(e)
		  {
			  const params = 
			  {
				  type: 'success',
				  message: "成功打开预警！",
				   duration: 1000,
			  }
			  this.$refs.uToast.show({
					...params
			  })
			  console.log("准备执行")
			  this.testGet()
			  // this.startRecord(true);
			  console.log("执行完毕")
		  }
		  else {
			  const params =
			  {
				  type: 'error',
				  message: "您已关闭预警！",
				   duration: 1000,
			  }
			  this.$refs.uToast.show({
					...params
			  })
		  }
	  },
	  switch_change1(e) {
	  		  if(e)
	  		  {
	  			  const params = 
	  			  {
	  				  type: 'success',
	  				  message: "成功打开预警！",
	  				   duration: 1000,
	  			  }
	  			  this.$refs.uToast.show({
	  					...params
	  			  })
				  this.startRecord(true);
	  			  setTimeout(() => {
					  plus.push.createMessage("检测含有深度伪造内容 ，请注意安全！","");
					  const bgAudioManager = uni.getBackgroundAudioManager();
					  bgAudioManager.src = 'https://blog-leo021017.oss-cn-beijing.aliyuncs.com/alert.mp3';
					  uni.vibrateLong({
					  	success: function () {
					  		console.log('success');
					  	}
					  });
					  this.stopRecord()
				  }, 31000);
	  		  }
	  		  else {
	  			  const params =
	  			  {
	  				  type: 'error',
	  				  message: "您已关闭预警！",
	  				   duration: 1000,
	  			  }
	  			  this.$refs.uToast.show({
	  					...params
	  			  })
	  		  }
	  },
  }
}
</script>

<style>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/*#ifndef APP-NVUE*/
.u-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
 /*#endif*/

.text {
  flex: 1;
}

/*#ifndef APP-NVUE*/
.switch input[type="checkbox"] {
  width: 50px;
  height: 30px;
}
 /*#endif*/
</style>
