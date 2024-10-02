<template>
    <view class="changePwd">
		<akira-particles :particlestyle="particleStyle" />
        <!-- <van-nav-bar title="修改密码" left-text="返回" left-arrow @click-left="router.back()" fixed placeholder /> -->
        <text class="changePwd_title">设置新密码</text>
        <form>
            <view class="changePwd_form_wrap">
                <text class="label">旧密码：</text>
                <input type="password" placeholder="请输入当前密码" v-model="oldPwd">
            </view>
            <view class="changePwd_form_wrap">
                <text class="label">新密码：</text>
                <input type="password" placeholder="请设置新密码" v-model="newPwd">
            </view>
            <view class="changePwd_form_wrap">
                <text class="label">确认密码：</text>
                <input type="password" placeholder="请再次输入新密码" v-model="newPwds">
            </view>
        </form>
        <text class="tips">密码长度6-12位，由字母数字_构成</text>
        <view class="btn">
            <button @click="confirm">确定</button>
        </view>
        <view class="err" :class="errShow ? 'errShow' : 'err'">
            {{ errMsg }}
        </view>
    </view>
</template>

<script>
import AkiraParticles from '@/uni_modules/aki-particles/components/aki-particles/aki-particles.vue';  // 路径和文件名根据实际情况调整
export default {
	components: {
	    AkiraParticles,  // 注册 akira-particles 组件
	},
    name: "changePwd",
    data() {
        return {
			particleStyle: {
			    style: 'nasa',  // 或者你的其他样式
			    bgcolor: '#ffffff',  // 背景颜色
			    zindex: -1,  // z-index 层级
			},
            errShow: false,
            errMsg: '错误',
            oldPwd: '',
            newPwd: '',
            newPwds: ''
        };
    },
    methods: {
        showErr(msg) {
            this.errShow = true;
            this.errMsg = msg
            setTimeout(() => {
                this.errShow = false
            }, 2000)
        },
        confirm() {
            if (!this.oldPwd) {
                setTimeout(() => {
                    this.showErr('请输入旧密码')

                }, 500)
                return
            }
            let reg = /^[0-9a-zA-Z_]{1,}$/;
            if (!reg.test(this.newPwd)) {
                this.showErr('密码长度6-12位，可以由字母数字_构成')

                return;
            }
            if (this.newPwd !== this.newPwds) {
                this.showErr('两次输入密码不一致，请重新输入')

                return;
            }
            if (this.newPwd.length < 6 || this.newPwd.length > 12) {
                this.showErr('密码长度为6~12位！')

                return;
            }
        }
    }

}
</script>

<style scoped lang="scss">
.changePwd {
    width: 100vw;
    height: 100vh;
    padding: 40px 16px;
    box-sizing: border-box;
}

.changePwd_title {
    width: 100%;
    font-size: 20px;
}


.changePwd_form_wrap {
    width: 100%;
    margin-top: 28px;
    margin-bottom: 18px;
    border-bottom: 1px solid #ccc;
    padding: 12px 0;

}

.label {
    width: 80px;
    text-align: left;
    font-size: 14px; /* 调整字体大小 */
}

text {
    width: 80px;
    text-align: left;
}

input {
    margin-top: 12rpx;
    border: 0;
	font-size: 14px;
}

.tips {
    color: #666;
	font-size: 14px;
}

.btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40rpx;

    button {
        width: 92%;
        height: 40px;
        border-radius: 80upx;
        margin-top: 28px;
        color: #fff;
        background-color: #3e52d5;
        border: 0;
    }
}

.err {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0px;
    line-height: 46px;
    background-color: #e65557;
    transition: all 0.5s;
    overflow: hidden;
    color: #fff;
    padding-left: 8px;
	font-size: 14px;
}

.errShow {
    height: 46px;
    transition: all 0.5s;
    z-index: 999999999;
}
</style>