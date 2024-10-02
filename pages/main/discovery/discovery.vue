<template>
	<view class="content">
		<view class="tips" :class="{ 'tips-ani': tipShow }">为您更新了10条最新新闻动态</view>
		<!-- 添加搜索框组件 -->
		<sui-search @blur="handleSearchBlur" placeholder="请点此搜索" class="full-width-search"></sui-search>
		<!-- 基于 uni-list 的页面布局 -->
		<uni-list>
				<!-- to属性：将新闻ID和标题传给详情页 -->
				<!-- TODO：需增加日期格式化的示例 -->
			<uni-list-item direction="row" v-for="item in newsList" :key="item.id" :title="item.title">
					<!-- 通过body插槽定义列表内容显示 -->
				<template v-slot:body>
					<view class="uni-list-box uni-content">
						<view class="uni-title uni-ellipsis-2">{{item.title}}</view>
						<view class="uni-note">
							<text>{{item.user_name}}</text>							<text>{{item.last_modify_date}}</text>
						</view>
					</view>
				</template>
					<!-- 通过footer插槽自定义图片右侧显示 -->
				<template v-slot:footer>
					<view class="uni-thumb" style="margin: 0;">
							<!-- 当前判断长度只为简单判断类型，实际业务中，根据逻辑直接渲染即可 -->
						<image :src="item.avatar.length > 3?item.avatar : item.avatar[0]" mode="aspectFill"></image>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
			<!-- 通过 loadMore 组件实现上拉加载效果，如需自定义显示内容，可参考：https://ext.dcloud.net.cn/plugin?id=29 -->
		<u-tabbar
		:placeholder="false"
		:value="value"
		:safeAreaInsetBottom="false"
		:display="flex"
		>
			<u-tabbar-item text="首页" icon="home" name="home" @click="tab1"></u-tabbar-item>
			<u-tabbar-item text="发现" icon="photo" name="discovery"></u-tabbar-item>
			<u-tabbar-item text="我的" name="account" icon="account" @click="tab2"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>

export default {
	components: {},
	data() {
	  return {
	    newsList: [
	      {
	        id: 1,
	        user_name: "央视新闻",
	        title: "为什么欺诈事件层出不穷？",
	        excerpt: "没有永远的敌人，只有永远的利益。",
	        last_modify_date: "2024-02-01 17:11:09",
	        avatar: "https://img.36krcdn.com/20200410/v2_9c3331af67e64994aa97a27fffb1a380_img_png?x-oss-process=image/resize,m_mfit,w_520,h_300/crop,w_520,h_300,g_center",
	      },
	      {
	        id: 2,
	        user_name: "央视新闻",
	        title: "2020数字中国创新大赛-数字安全问题引关注",
	        excerpt: "提升数字治理、建设“温暖渔政”——四大赛题助力政府解决治理难题",
	        last_modify_date: "2024-02-01 17:03:18",
	        avatar: "https://img.36krcdn.com/20200411/v2_16417a06088947debe0450950f8fc813_img_png",
	      },
	      {
	        id: 3,
	        user_name: "央视新闻",
	        title: "加强安全理念，从一点一滴小事做起",
	        excerpt: "补贴很难落袋为安。",
	        last_modify_date: "2024-02-01 16:11:11",
	        avatar: [
	          "https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png?x-oss-process=image/resize,m_mfit,w_520,h_300/crop,w_520,h_300,g_center",
	          "https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png?x-oss-process=image/resize,m_mfit,w_520,h_300/crop,w_520,h_300,g_center",
	          "https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png?x-oss-process=image/resize,m_mfit,w_520,h_300/crop,w_520,h_300,g_center",
	        ],
	      },
		  {
			id: 4,
			user_name: "央视新闻",
			title: "医疗相关诈骗再引关注！一文扒开背后骗术",
			excerpt: "",
			last_modify_date: "2024-02-01 15:53:10",
			avatar: "https://img.36krcdn.com/20200410/v2_86bbf8245f754be79f3386a82b385093_img_000",
		  },
		  {
			id: 5,
			user_name: "央视新闻",
			title: "某学生为赚取生活费遭遇帮刷单骗局——我们应如何避免",
			excerpt: "开源节流",
			last_modify_date: "2024-02-01 15:02:22",
			avatar: "https://img.36krcdn.com/20200408/v2_c67c3edfe4b5446992b32fad93a44a75_img_png",
		  },
		  {
			id: 6,
			user_name: "央视新闻",
			title: "关注！即便是亲人的脸与声音也可能是伪造的",
			excerpt: "学会利用好真正艰难的时刻，增强自己的精神力量",
			last_modify_date: "2024-02-01 13:52:12",
			avatar: "https://img.36krcdn.com/20200406/v2_d2c6a686b4074a1eb43603e67d6ba204_img_png",
		  },
		  {
			id: 7,
			user_name: "央视新闻",
			title: "​你的手机上有哪些地方可能出现诈骗",
			excerpt: "",
			last_modify_date: "2024-02-01 13:44:11",
			avatar: [
			  "https://img.36krcdn.com/20200411/v2_da4c26244cbc494c8e0e5918518e866c_img_png",
			  "https://img.36krcdn.com/20200411/v2_da4c26244cbc494c8e0e5918518e866c_img_png",
			  "https://img.36krcdn.com/20200411/v2_da4c26244cbc494c8e0e5918518e866c_img_png",
			],
		  },
		  {
			id: 8,
			user_name: "央视新闻",
			title: "经济下滑趋势加剧，更应警惕不良分子诈骗猖獗",
			excerpt: "",
			last_modify_date: "2024-02-01 12:51:10",
			avatar: "https://img.36krcdn.com/20200406/v2_232e9248d5c74ff989db57a0b6713abe_img_png",
		  },
		  {
			id: 9,
			user_name: "央视新闻",
			title: "你所见并非真实——短视频网站主播也可换脸",
			excerpt: "视频社交的时代来了。",
			last_modify_date: "2024-02-01 12:41:11",
			avatar: "https://img.36krcdn.com/20200411/v2_b92317dfc59948cea0f3c69a0357e519_img_000?x-oss-process=image/resize,m_mfit,w_432,h_288/crop,w_432,h_288,g_center",
		  },
		  {
			id: 10,
			user_name: "央视新闻",
			title: "2024年已经过去了四分之一，有哪些重大诈骗事件发生？",
			excerpt: "",
			last_modify_date: "2024-02-01 11:52:11",
			avatar: "https://img.36krcdn.com/20200404/v2_d6613223fb15414897a0ba3449d00afd_img_png",
		  },
		  {
		    "id": 11,
		    "user_name": "央视新闻",
		    "title": "莫让你的善意被利用——AI合成灾区图片诈捐",
		    "excerpt": "",
		    "last_modify_date": "2024-02-01 11:21:10",
		    "avatar": ["https://img.36krcdn.com/20200410/v2_224a699a06504292804e4bdf70ca87bb_img_png", "https://img.36krcdn.com/20200410/v2_224a699a06504292804e4bdf70ca87bb_img_png", "https://img.36krcdn.com/20200410/v2_224a699a06504292804e4bdf70ca87bb_img_png"],
		  },
		  {
		    "id": 12,
		    "user_name": "央视新闻",
		    "title": "BAT的安全服务报告",
		    "excerpt": "",
		    "last_modify_date": "2024-02-01 11:12:11",
		    "avatar": "https://img.36krcdn.com/20200410/v2_747fc8a18fde4da4b1ba1080d8e6aa04_img_000",
		  },
		  {
		    "id": 13,
		    "user_name": "央视新闻",
		    "title": "小红书崛起背后的阴影：欺诈事件屡屡发生",
		    "excerpt": "",
		    "last_modify_date": "2024-02-01 10:53:11",
		    "avatar": "https://img.36krcdn.com/20200410/v2_18c3a78cf8be42ccb45e4daba0c87c13_img_png",
		  },
		  {
		    "id": 121354,
		    "user_name": "央视新闻",
		    "title": "将反诈教育落实进校园，他们这样做——>",
		    "excerpt": "",
		    "last_modify_date": "2024-02-01 10:03:18",
		    "avatar": "https://img.36krcdn.com/20200410/v2_fb948f4c18de4b22927f0361d53f6caf_img_png",
		    "mode": 2
		  }
		],
	    formData: {
	      status: 'loading',
	    },
	    tipShow: false,
	    value: 'discovery',
	  };
	},
	onLoad() {},
	methods: {
	  load(data, ended) {
	    if (ended) {
	      this.formData.status = 'noMore';
	    } else {
	      this.newsList = data;
	    }
	  },
	},
	/**
	 * 下拉刷新回调函数
	 */
	onPullDownRefresh() {
		this.formData.status = 'more'
		this.$refs.udb.loadData({
			clear: true
		}, () => {
			this.tipShow = true
			clearTimeout(this.timer)
			this.timer = setTimeout(()=>{
				this.tipShow  = false
			},1000)
			uni.stopPullDownRefresh()
		})
	},
	/**
	 * 上拉加载回调函数
	 */
	onReachBottom() {
		this.$refs.udb.loadMore()
	},
	onLaunch() {
		uni.hideTabBar({})
	},
	onShow: function(){
		uni.hideTabBar({});
		if (typeof this.getTabBar === 'function' &&
			this.getTabBar()) {
			this.getTabBar().setData({
			  selected: 2 // 控制哪一项是选中状态
			})
		  }
	},
	methods: {
		tab1() {
			uni.$u.route({
				type: 'tab',
				url: 'pages/main/index',
				params: {
				}
			});
		},
		tab2() {
			uni.$u.route({
				type: 'tab',
				url: 'pages/main/resume/resume',
				params: {
				}
			});
		},
		sectionChange(index) {
			this.curNow = index;
		}
	},
	// 处理搜索框失去焦点事件
	handleSearchBlur(keyword) {
	    console.log('Search blur event triggered with keyword:', keyword);
	// 在这里添加处理搜索的逻辑
	},
};
</script>

<style lang="scss">

	@import '@/common/uni-ui.scss';

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	.uni-list-box {
		margin-top: 0;
	}

	.uni-content {
		padding-right: 10px;
	}

	.uni-note {
		display: flex;
		margin: 0;
		justify-content: space-between;
	}

	.tips {
		color: #67c23a;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		background-color: #f0f9eb;
		height: 0;
		opacity: 0;
		transform: translateY(-100%);
		transition: all 0.3s;
	}

	.tips-ani {
		transform: translateY(0);
		height: 40px;
		opacity: 1;
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center; /* 子元素水平居中 */
	}

	.list-picture {
		width: 100%;
		height: 145px;
	}

	.thumb-image {
		width: 100%;
		height: 100%;
	}

	.ellipsis {
		display: flex;
		overflow: hidden;
	}

	.uni-ellipsis-1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.uni-ellipsis-2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.full-width-search {
	  width: 98%; // 设置宽度为100%
	  border: 1px solid #000; // 添加黑色边框
	  border-radius: 15rpx; // 设置圆角半径，根据实际需求调整
	}
</style>
