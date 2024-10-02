<template>
	<view>
		<view class="u-page" style="background-color: #3e52d5;">
			<view class="u-demo-block">
				<view style="margin-right: 50%;">
					<c-lottie
					    ref="cLottieRef"
					    src='https://blog-leo021017.oss-cn-beijing.aliyuncs.com/img/detection1.json'
					    @LoopComplete="onLoopComplete" 
					    width="200%" height='200%' :loop="true">
					</c-lottie>
				</view>
			</view>
			
			<view class="u-demo-block" style="margin-left: 10%;">
				<text style="font-size: 80%; font-weight: 800; color: white; margin-left: 5%; margin-top: 0ch;">是否检测当前浏览内容是否为AI合成欺诈？</text>
				<c-lottie
				    ref="cLottieRef"
				    src='https://blog-leo021017.oss-cn-beijing.aliyuncs.com/img/power.json'
				    @LoopComplete="onLoopComplete" 
				    width="90%" height='90%' :loop="true">
				</c-lottie>
			</view>
		</view>
		
		<br />
		
		<view class="u-demo-block">
		<u-button text="开始检测" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" @click="open()" style="border-radius: 60rpx; width: 90%;"></u-button>
		</view>
		
		
		
		
<!-- 		<view class="group"> -->
<!-- 		    <view class="btn" @click="startRecord(false)">开始录屏(无声音)</view>
		    <view class="btn" @click="startRecord(true)">开始录屏(有声音)</view> -->
		    <!-- <view class="btn" @click="stopRecord">停止录屏</view>
		</view> -->
		<!-- 
		<view class="group">
		    <view class="btn" @click="noRecord">禁止录屏</view>
		    <view class="btn" @click="allowRecord">允许录屏</view>
		</view> -->
		
		
	</view>
</template>

<script>
	export default{
		data () {
			return {
				dbName: 'report',
				dbPath: '_doc/report.db',
				dbTable: 'report',
				chatText1: {
					id: "1",
					score: '3.10',
					date: '2024-03-09',
					model: 'LRNet',
					sense: '根据默认参数自动调整',
					frame: '根据默认参数自动调整',
					type: '视频通话检测',
					title: "第1次检测",
				},
			}
		},
		onReady() {
			// this.openDatabase();
			// this.isOpenDatabase();
			// this.createChatTable();
			// this.dropTable();
			// this.deleteChatRow();
			// this.insertChatRow();
			// this.selectSql();
		},
		methods: {
			// 获取录制对象
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
			                // {code:0, msg:"开始录屏"}
			                // uni.showToast({title: "已开始检测", icon: "none"})
			            }else{
			                // {code:501, msg:"您的系统不支持录屏功能"}
			                // {code:502, msg:"您已拒绝录屏权限"}
			                // {code:503, msg:"您已拒绝录屏操作"}
			                // {code:504, msg:"当前窗口禁止录屏"}
			                uni.showToast({title: "录制失败:"+JSON.stringify(res), icon: "none"})
			            }
			        })
					// setTimeout(() => {
					//   uni.showToast({
					// 	title: '检测到欺诈!',
					// 	icon: "none"
					//   });
					//   const bgAudioManager = uni.getBackgroundAudioManager();
					//   bgAudioManager.title = '致爱丽丝';
					//   bgAudioManager.singer = '暂无';
					//   bgAudioManager.coverImgUrl = 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/music-a.png';
					//   bgAudioManager.src = 'https://blog-leo021017.oss-cn-beijing.aliyuncs.com/alert.mp3';
					//   uni.vibrateLong({
					// 	success: function () {
					// 		console.log('success');
					// 	}
					//   });
					//   this.stopRecord()
					// }, 5000);
			    },
			    // 停止录制
			    stopRecord(){
			        let res = this.getRecordObj().stopRecord()
			        if(res.code == 0){
			            // {code:0, msg:"录制成功", path:"本地视频路径"}
			            // console.log("本地视频路径:" + res.path) // 可继续调uni.uploadFile()上传至服务器
			            // uni.showToast({title: "录制的视频已保存到相册", icon: "none"})
			        }else{
			            // {code:501, msg:"您还未开始录屏"}
			            uni.showToast({title: "操作失败:"+JSON.stringify(res), icon: "none"})
			        }
			    },
			    // 禁止录屏
			    noRecord(){
			        this.getRecordObj().noRecord()
			        uni.showToast({title: "已禁止录屏", icon: "none"})
			    },
			    // 允许录屏
			    allowRecord(){
			        this.getRecordObj().allowRecord()
			        uni.showToast({title: "已允许录屏", icon: "none"})
			    },
				open() {
				  uni.showToast({title: "开始检测", icon: "none"})
					  this.startRecord(true);
					  
				  setTimeout(() => {
						  plus.push.createMessage("检测到深度伪造内容，请注意安全！","");
						  const bgAudioManager = uni.getBackgroundAudioManager();
						  bgAudioManager.src = 'https://blog-leo021017.oss-cn-beijing.aliyuncs.com/alert.mp3';
						  uni.vibrateLong({
							success: function () {
								console.log('success');
							}
						  });
						  this.stopRecord()
					  }, 35000);
				},
				executeSql(sql) {
					    return new Promise((resolve, reject) => {
					        plus.sqlite.selectSql({
					            name: this.dbName,
					            sql: sql,
					            success: (data) => {
					                resolve(data);
					            },
					            fail: (e) => {
					                reject(e);
					            }
					        });
					    }).then((data) => {
					        this.couponList = data;
					        console.log(data, '---------------');
							console.log(this.couponList)
					    }).catch((error) => {
					        console.log('selectSql failed: ' + JSON.stringify(error));
					    });
					},
				insertChatRow() {
					let data1 = this.chatText1
					let sql1 = "insert into " + this.dbTable +  " values('" + data1.id + "','" + data1.type +
						"','" + data1.model + "','" + data1.sense + "','" + data1.frame + "','" + data1.date + "','" + data1.result + "','" + data1.score + "'" + ")";
					this.executeSql(sql1)
				},
					createChatTable() {
						let sql = 'CREATE TABLE if not exists ' + this.dbTable + ' ( "id" varchar(32) NOT NULL,"type" varchar(1024),"model" varchar(32), "sense" varchar(32), "frame" varchar(32), "date" varchar(32), "result" varchar(32), "score" varchar(32));';
						this.executeSql(sql);
					},
					openDatabase() {
						plus.sqlite.openDatabase({
							name: this.dbName,
							path: this.dbPath,
							success: function(e) {
								console.log('打开数据库成功')
							},
							fail: function(e) {
								console.log(e,'打开数据库失败')
							}
						});
					},
					isOpenDatabase() {
						let res = plus.sqlite.isOpenDatabase({
							name: this.dbName,
							path: this.dbPath
						});
						if (res) {
							console.log(res,'数据库已打开')
						} else {
							console.log(res,'数据库未打开')
						}
					},
					dropTable() {
					let sql = 'DROP TABLE ' + this.dbTable + ';'
					plus.sqlite.executeSql({
						name: this.dbName,
						sql: sql,
						success: function(e) {
							console.log("删除数据表成功");
						},
						fail: function(e) {
							console.log('executeSql failed: ' + JSON.stringify(e));
						}
					})
				},
					deleteChatRow() {
						let sql = "delete from " + this.dbTable;
						this.executeSql(sql)
					},
					selectSql() {
						let curPage = 1
						let pageSize = 20
						let fromId = '123'
						let sql = 'select * from ' + this.dbTable;
						this.executeSql(sql);
					},
					
			}
		}
</script>

<style>
    .group {
        padding: 40rpx 80rpx;
    }
    .group .btn{
        text-align: center;
        padding: 20rpx;
        border: 1px solid #007AFF;
        color: #007AFF;
    }
    .group .btn~.btn{
        border-top: none;
    }
</style>