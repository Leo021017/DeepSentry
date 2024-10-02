<template>
	<view class="u-page">
		<view class="list" @click="go_static">
			<view class="item">
				<view class="text">
					<text style="color: #3e52d5; font-size: 120%;">45</text>
					<text>我的上传</text>
				</view>
				<u-line direction="col" color="#979797 " length="32rpx"></u-line>
			</view>
			<view class="item">
				<view class="text">
					<text style="color: #3e52d5; font-size: 120%;">23</text>
					<text>通话守护</text>
				</view>
				<u-line direction="col" color="#979797 " length="32rpx"></u-line>
			</view>
			<view class="item">
				<view class="text">
					<text style="color: #3e52d5; font-size: 120%;">13</text>
					<text>标记欺诈</text>
				</view>
			</view>
		</view>
		
		 <u-sticky bgColor="#fff">
			<u-tabs 
			:list="list4"
			lineColor="#3e52d5"
			 :activeStyle="{
						color: '#3e52d5',
						fontWeight: 'bold',
						transform: 'scale(1.05)'
					}"
			></u-tabs>
		  </u-sticky>
		
		<view class="content">
			<cc-defineCoupon colors="#3e52d5" :couponList="couponList" @onReceive="onReceive"></cc-defineCoupon>
		</view>
		
	</view>
</template>

<script>
	// import {openSqlite, userInfoSQL, addUserInformation} from '@/common/sqlite.js'
    export default {
        components: {
				
        },
		data() {
		    return {
				dbName: 'history',
				dbPath: '_doc/history.db',
				dbTable: 'history',
				dbIsOpen: false,
		        couponshow: false,
		        couponList: [ //优惠券列表
					{
					    title: '第1次检测',
					    score: '98.7',
					    date: '2024-07-28',
					    id: '1',
					    status: '1',
						type: '0'
					},
					{
					    title: '第2次检测',
					    score: '85.6',
					    date: '2024-07-28',
					    id: '1',
					    status: '1',
						type: '0'
					},
					{
					    title: '第3次检测',
					    score: '98.7',
					    date: '2024-07-28',
					    id: '1',
					    status: '1',
						type: '0'
					},
					{
					    title: '第4次检测',
					    score: '94.6',
					    date: '2024-07-28',
					    id: '1',
					    status: '1',
						type: '0'
					},
					{
					    title: '第5次检测',
					    score: '90.2',
					    date: '2024-07-28',
					    id: '1',
					    status: '1',
						type: '0'
					},
					{
					    title: '第6次检测',
					    score: '12.83',
					    date: '2024-07-28',
					    id: '1',
					    status: '0',
						type: '1'
					},
					{
					    title: '第7次检测',
					    score: '97.2',
					    date: '2024-07-28',
					    id: '3',
					    status: '0',
						type: '0'
					},
					{
					    title: '第8次检测',
					    score: '95.4',
					    date: '2024-07-28',
					    id: '2',
					    status: '0',
						type: '0'
					},
		            {
		                title: '第9次检测',
		                score: '13.1',
		                date: '2024-03-09',
		                id: '1',
		                status: '0',
						type: '1'
		            },
					{
					    title: '第2次检测',
					    score: '9.89',
					    date: '2024-03-13',
					    id: '1',
					    status: '0',
						type: '0'
					},
					{
					    title: '第3次检测',
					    score: '7.49',
					    date: '2024-04-01',
					    id: '1',
					    status: '0',
						type: '0'
					},
					{
					    title: '第4次检测',
					    score: '2.34',
					    date: '2023-06-09',
					    id: '1',
					    status: '0',
						type: '1'
					},
					{
					    title: '第5次检测',
					    score: '1.64',
					    date: '2024-04-02',
					    id: '1',
					    status: '0',
						type: '1'
					},
					{
					    title: '第6次检测',
					    score: '8.47',
					    date: '2024-05-12',
					    id: '1',
					    status: '0',
						type: '0'
					},
					{
					    title: '第7次检测',
					    score: '9.87',
					    date: '2024-05-13',
					    id: '3',
					    status: '0',
						type: '0'
					},
					{
					    title: '第8次检测',
					    score: '8.56',
					    date: '2024-05-27',
					    id: '2',
					    status: '0',
						type: '0'
					}
		        ],
				list4: [{
						name: '通话检测'
					}, {
						name: '录屏检测',
					}, {
						name: '视频文件',
					},{
						name: '音频文件',
					}, {
						name: '图片文件',
					}, ],
					chatText1: {
						id: "1",
						score: '31.0',
						date: '2024-03-09',
						status: '0',
						type: '1',
						title: "第1次检测"
					},
					chatText2: {
						id: "2",
						score: '98.9',
						date: '2024-03-13',
						status: '0',
						type: '0',
						title: "第2次检测"
					},
					chatText3: {
						id: "3",
						score: '74.9',
						date: '2024-04-03',
						status: '0',
						type: '0',
						title: "第3次检测"
					},
					chatText4: {
						id: "4",
						score: '23.4',
						date: '2024-04-03',
						status: '0',
						type: '1',
						title: "第4次检测"
					},
					chatText5: {
						id: "5",
						score: '16.4',
						date: '2024-04-13',
						status: '0',
						type: '1',
						title: "第5次检测"
					},
					chatText6: {
						id: "6",
						score: '84.7',
						date: '2024-05-12',
						status: '0',
						type: '0',
						title: "第6次检测"
					},
					chatText7: {
						id: "7",
						score: '98.7',
						date: '2024-05-13',
						status: '0',
						type: '0',
						title: "第7次检测"
					},
					chatText8: {
						id: "8",
						score: '85.6',
						date: '2024-05-27',
						status: '0',
						type: '0',
						title: "第8次检测"
					},
					chatText9: {
						id: "9",
						score: '98.7',
						date: '2024-07-28',
						status: '0',
						type: '0',
						title: "第9次检测"
					},
					chatText10: {
						id: "10",
						score: '94.6',
						date: '2024-07-28',
						status: '0',
						type: '0',
						title: "第10次检测"
					},
					chatText11: {
						id: "11",
						score: '90.2',
						date: '2024-07-28',
						status: '0',
						type: '0',
						title: "第11次检测"
					},
					chatText12: {
						id: "12",
						score: '97.2',
						date: '2024-07-28',
						status: '0',
						type: '0',
						title: "第12次检测"
					},
					chatText13: {
						id: "13",
						score: '96.8',
						date: '2024-07-28',
						status: '0',
						type: '0',
						title: "第13次检测"
					},
					chatText14: {
						id: "14",
						score: '95.4',
						date: '2024-07-28',
						status: '0',
						type: '0',
						title: "第14次检测"
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
			let sql1 = "insert into " + this.dbTable +  " values('" + data1.id + "','" + data1.score +
				"','" + data1.date + "','" + data1.status + "','" + data1.title + "','" + data1.type + "'" + ")";
			this.executeSql(sql1)
			let data2 = this.chatText2
			let sql2 = "insert into " + this.dbTable +  " values('" + data2.id + "','" + data2.score +
				"','" + data2.date + "','" + data2.status + "','" + data2.title + "','" + data2.type + "'" + ")";
			this.executeSql(sql2)
			let data3 = this.chatText3
			let sql3 = "insert into " + this.dbTable +  " values('" + data3.id + "','" + data3.score +
				"','" + data3.date + "','" + data3.status + "','" + data3.title + "','" + data3.type + "'" + ")";
			this.executeSql(sql3)
			let data4 = this.chatText4
			let sql4 = "insert into " + this.dbTable +  " values('" + data4.id + "','" + data4.score +
				"','" + data4.date + "','" + data4.status + "','" + data4.title + "','" + data4.type + "'" + ")";
			this.executeSql(sql4)
			let data5 = this.chatText5
			let sql5 = "insert into " + this.dbTable +  " values('" + data5.id + "','" + data5.score +
				"','" + data5.date + "','" + data5.status + "','" + data5.title + "','" + data5.type + "'" + ")";
			this.executeSql(sql5)
			let data6 = this.chatText6
			let sql6 = "insert into " + this.dbTable +  " values('" + data6.id + "','" + data6.score +
				"','" + data6.date + "','" + data6.status + "','" + data6.title + "','" + data6.type + "'" + ")";
			this.executeSql(sql6)
			let data7 = this.chatText7
			let sql7 = "insert into " + this.dbTable +  " values('" + data7.id + "','" + data7.score +
				"','" + data7.date + "','" + data7.status + "','" + data7.title + "','" + data7.type + "'" + ")";
			this.executeSql(sql7)
			let data8 = this.chatText8
			let sql8 = "insert into " + this.dbTable +  " values('" + data8.id + "','" + data8.score +
				"','" + data8.date + "','" + data8.status + "','" + data8.title + "','" + data8.type + "'" + ")";
			this.executeSql(sql8)
		},
			createChatTable() {
				let sql = 'CREATE TABLE if not exists ' + this.dbTable + ' ( "id" varchar(32) NOT NULL,"score" varchar(1024),"date" varchar(32), "status" varchar(32), "title" varchar(32), "type" varchar(32));';
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
			
			// 这个函数没用，去cc-definCoupon改
			go_static() {
				console.log("aa")
				uni.$u.route({
					url:'pages/main/report/per-report',
				})
			},
        }
    };
</script>

<style lang="scss" scoped>
	.list {
		width: 100%;
		display: flex;
		padding: 0 44rpx;
		box-sizing: border-box;

		.item {
			width: 33.34%;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			margin-bottom: 20px;

			.text {
				display: flex;
				flex-direction: column;
				align-items: center;
				

				>text:first-child {
					font-size: 36rpx;
					font-family: CloudHeiChaoGBK;
					line-height: 48rpx;
					font-weight: 600;
				}

				>text:last-child {
					font-size: 24rpx;
					color: #666666;
					line-height: 34rpx;
				}
			}
		}
	}
</style>