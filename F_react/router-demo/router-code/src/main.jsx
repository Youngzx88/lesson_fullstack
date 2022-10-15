import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import {BrowserRouter} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'

// 1. BrowserRouter组件？ 路由组件
// 2. react-router-dom 路由组件库
// 3. 现在可以给我们的应用添加跳转

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
