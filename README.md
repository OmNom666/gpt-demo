# gpt-demo
# 讯飞星火大模型V3.0 WebApi使用

文档说明：[星火认知大模型Web文档 | 讯飞开放平台文档中心 (xfyun.cn)](https://www.xfyun.cn/doc/spark/Web.html#_1-接口说明)

## 实现效果

![](https://szx-bucket1.oss-cn-hangzhou.aliyuncs.com/picgo/ai.gif)



## 初始化

用到如下依赖

```json
"dependencies": {
    "crypto-js": "^4.2.0",
    "highlight.js": "^11.9.0",
    "marked": "^9.1.3",
    "pinia": "^2.1.7",
    "pinia-plugin-persistedstate": "^3.2.0",
    "vue": "^3.3.4",
    "vue-router": "^4.2.5"
  }
```

修改 `main.js`

```js
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PiniaPluginPersistedstate from "pinia-plugin-persistedstate"
import App from './App.vue'
import router from './router'
import highlight from 'highlight.js'
import "highlight.js/styles/atom-one-dark.css"

const app = createApp(App)
// 配置Pinia并设置持久化缓存
const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)

app.use(pinia)
app.use(router)

// 配置Markdown语法高亮
app.directive("highlight",function(el){
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    highlight.highlightBlock(block);
  })
})

app.mount('#app')
```

## TTSRecorder

新建 `utils/TTSRecorder.js`

这个文件封装了发送消息并相应消息的核心功能


## msgStore

新建 `stores/msgStore.js` 

用于存放历史问题


## 编写界面代码

