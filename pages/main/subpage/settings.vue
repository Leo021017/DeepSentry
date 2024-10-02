<template>
  <div>
    <set-list :list="list" @item-click="handleItemClick"></set-list>
  </div>
</template>

<script>
import AkiraParticles from '@/uni_modules/aki-particles/components/aki-particles/aki-particles.vue';  // 路径和文件名根据实际情况调整
export default {
	components: {
	    AkiraParticles,  // 注册 akira-particles 组件
	},
	data() {
    return {
		particleStyle: {
		    style: 'default',  // 或者你的其他样式
		    bgcolor: '#ffffff',  // 背景颜色
		    zindex: -1,  // z-index 层级
		},
      list: [
        { name: "清除缓存", url: "" },
        { name: "更新版本", url: "" },
        { name: "关于APP", url: "" },
      ],
    };
  },
  methods: {
    handleItemClick(item) {
      console.log('Clicked on', item.name);
    },
  },
};
</script>
