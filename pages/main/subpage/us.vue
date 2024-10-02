<template>
  <div class="introduction">
    <h1>欢迎使用本作品!</h1>
    <p>
      我们是一个正在蓬勃发展的团队，团队的各位都有着充沛的精力和积极的态度来制作出完美的作品，
	  也期待你的使用与评价。
    </p>

    <h2>我们的使命</h2>
    <p>
      尽力去预警每一次可能会发生的AI伪造欺诈并向用户发出提示信息，帮助用户更好地在互联网时代中保护自己。
	  同时我们也致力于不断更新我们的技术来面对日益更新的欺诈手段，
    </p>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				particleStyle: {
				    style: 'default',  // 或者你的其他样式
				    bgcolor: '#ffffff',  // 背景颜色
				    zindex: -1,  // z-index 层级
				},
			}
		}
	}
</script>

<style scoped>
.introduction {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h1 {
  color: #333;
}

h2 {
  color: #555;
}

p {
  line-height: 1.6;
  color: #777;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 8px;
  color: #555;
}
</style>
