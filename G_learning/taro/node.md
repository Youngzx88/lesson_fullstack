# Taro learning
## 1、CLI 工具安装
### 1.1、使用 npm 安装 CLI
```bash
npm install -g @tarojs/cli
npx @tarojs/cli init myApp
```
### 1.2、文件分析
```txt
├── babel.config.js             # Babel 配置
├── .eslintrc.js                # ESLint 配置
├── config                      # 编译配置目录
│   ├── dev.js                  # 开发模式配置
│   ├── index.js                # 默认配置
│   └── prod.js                 # 生产模式配置
├── package.json                # Node.js manifest
├── dist                        # 打包目录
├── project.config.json         # 小程序项目配置
├── src # 源码目录
│   ├── app.config.js           # 全局配置->路由...
│   ├── app.css                 # 全局 CSS
│   ├── app.js                  # 入口组件
│   ├── index.html              # H5 入口 HTML
│   └── pages                   # 页面组件
│       └── index
│           ├── index.config.js # 页面配置
│           ├── index.css       # 页面 CSS
│           └── index.jsx       # 页面组件，如果是 Vue 项目，此文件为 index.vue
```
### 1.3、页面标题
```js
// src/pages/index/index.config.js
export default {
  navigationBarTitleText: '首页'
}
2、路由及tabBar
// app.config.js
export default {
  pages: [
    'pages/index/index',
    'pages/nodes/nodes',
    'pages/hot/hot',
    'pages/node_detail/node_detail',
    'pages/thread_detail/thread_detail'
  ],
  tabBar: {
    list: [{
      'iconPath': 'resource/latest.png',
      'selectedIconPath': 'resource/lastest_on.png',
      pagePath: 'pages/index/index',
      text: '最新'
    }, {
      'iconPath': 'resource/hotest.png',
      'selectedIconPath': 'resource/hotest_on.png',
      pagePath: 'pages/hot/hot',
      text: '热门'
    }, {
      'iconPath': 'resource/node.png',
      'selectedIconPath': 'resource/node_on.png',
      pagePath: 'pages/nodes/nodes',
      text: '节点'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'V2EX',
    navigationBarTextStyle: 'black'
  }
}
```