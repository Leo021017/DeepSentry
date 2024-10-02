<template>
  <div class="hm-balance-card">
    <div class="box">
      <image class="layer" src='/static/hm-balance-card/images/img_25821_0_0.png' />
      <div class="hd">
        <text class="info">检测结果</text>
        <div class="wrap">
          <!-- <div class="empty" /> -->
		  <c-lottie
		      ref="cLottieRef"
		      src='https://blog-leo021017.oss-cn-beijing.aliyuncs.com/img/card4.json'
		      @LoopComplete="onLoopComplete" 
		      width="750rpx" height='750rpx' :loop="true"></c-lottie>
        </div>
      </div>
      <text class="bd">{{ options.bd }}</text>
      <!-- <text class="main">{{ options.main }}</text> -->
      <div class="ft">
        <div class="block">
          <text class="date">检测日期</text>
          <text class="word">{{ options.word }}</text>
        </div>
        <div class="group">
          <text class="cvv">检测类型</text>
          <text class="num">{{ options.num }}</text>
        </div>
        <image class="largeIcon" src='/static/hm-balance-card/images/img_25821_0_1.png' />
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'HmBalanceCard',
  props: {
    dataId: {
      type: String,
      default: 'hm-balance-card'
    },
    options: {
      type: Object,
      default: function() {
        return {
          layer:
            './images/img_25821_0_0.png',
          info: '信用卡余额',
          zhanghaoguanli:
            './images/img_25821_0_2.png',
          bd: '¥12929.05',
          main: '5326 5149 4497 1577',
          date: '日期',
          word: '12/24',
          cvv: 'CVV',
          num: '235',
          largeIcon:
            './images/img_25821_0_1.png'
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
@import './index.response.css';
</style>
