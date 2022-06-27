import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  //外面再包一层，数据管理功能
  // 路由SPA
  // react声明式开发
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
