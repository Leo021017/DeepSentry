import Vue from 'vue'
import App from './App'

// vuex
import store from './store'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'

import mixin from './common/mixin'

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uView)

// #ifdef MP
// 引入uView对小程序分享的mixin封装
const mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)
// #endif

Vue.mixin(mixin)

const app = new Vue({
    store,
    ...App
})

Vue.prototype.tui = {
    imgUrl(){
        return 'http://test.h5.org.cn/qz/pet';
    }
}

// 引入请求封装
require('./util/request/index')(app)

app.$mount()

import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

import appPush from '@/plugins/APPPush/index.js'
Vue.use(appPush)
