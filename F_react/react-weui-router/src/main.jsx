import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//浏览器路由
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 路由功能是需要主动开启的
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
