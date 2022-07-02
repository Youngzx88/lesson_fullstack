import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { IconStyle } from "./assets/iconfont/iconfont";
// 架构中store 模块 
import store from './store'
import 'swiper/dist/css/swiper.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 外面再包一层 数据管理功能   项目做大了， 企业里的财务
  // 路由， SPA BrowserRouter？ react-router-dom  组件
  // react 申明式开发]
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <IconStyle />
      {/* react 组件 */}
      <App />
    </BrowserRouter>
  </Provider>
)
