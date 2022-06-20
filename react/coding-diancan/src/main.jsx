import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import './assets/styles/reset.css'
// import './assets/font/iconfont.css'
import './modules/rem'  // 自适应
import 'swiper/dist/css/swiper.min.css'
import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
