# lime-liquid 水波进度球
- uniapp vue3 css3实现的水波进度球
- Q群 1169785031

## 使用
- 导入插件后直接使用
- 更多示例请看下方说明
```vue
<l-liquid v-model:current="modelVale" :percent="target">
	<text>{{modelVale}}%</text>
</l-liquid>
```
```js
const target = ref(50)
const modelVale = ref(0)
```

### 查看示例
- 导入后直接使用这个标签查看演示效果，
```html
<!-- // 代码位于 uni_modules/lime-liquid/compoents/lime-liquid -->
<lime-liquid />
```


### 插件标签
- 默认 l-liquid 为 component
- 默认 lime-liquid 为 demo

### 关于vue2的使用方式
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可.
```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

另外插件也用到了TS，vue2可能会遇过官方的TS版本过低的问题,找到HX目录下的`compile-typescript`目录
```cmd
// \HBuilderX\plugins\compile-typescript
yarn add typescript -D
- or - 
npm install typescript -D
```

#### 使用

```vue
<l-liquid :current.sync="modelVale" :percent="target">
	<text>{{modelVale}}%</text>
</l-liquid>
<button @tap="onClick(20)">+</button>
<button @tap="onClick(-20)">-</button>
```
```js
export default {
	data() {
		return {
			modelVale: 0,
			target: 50
		}
	},
	methods: {
		onClick(number) {
			this.target = Math.max(Math.min(100, this.target + number), 0)
		}
	}
}
```

## API

### Props

| 参数                       | 说明                                                         | 类型             | 默认值       |
| --------------------------| ------------------------------------------------------------ | ---------------- | ------------ |
| percent                   | 水波球目标值                                                    | <em>number</em>  | `0`        |
| v-model:current           | 水波球当前值                                                    | <em>number</em>  | `-`        |
| size                      | 水波球尺寸,vue2不支持动态的rpx                                    | <em>string</em>  | `-`     |
| outline                   | 水波球外描边                                                    | <em>object</em>  | ``     |
| background                | 水波球背景                                                    | <em>string</em>  | `#E3F7FF`     |
| waveColor                 | 水纹颜色                                                    | <em>string</em>  | `#007aff`     |



## 主题定制

### 样式变量
- 在nvue下不支持
组件提供了下列 CSS 变量，可用于自定义样式

| 名称                              | 默认值                     | 描述 |
| --------------------------------- | -------------------------- | ---- |
| --l-liquid-bg-color        | __                     | -    |
| --l-liquid-size | _125px_                     | -    |
| --l-liquid-border-radius  | _50%_ | -    |
| --l-iquid-inner-border-radius       | _50%_  | -    |
| --l-liquid-wave-color     | _#007aff_                      | -    |
| --l-liquid-border-distance    | _6px_                      | -    |
| --l-liquid-border-width    | _6px_                      | -    |
| --l-liquid-border-color    | _#007aff_                      | -    |


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)