import React from 'react'
import ReactDom from 'react-dom'
import {App} from './app'
// 报错 ts 好牛逼，ts让js更安全，

ReactDom.render(
  <div>
    <App></App>
  </div>,
  document.getElementById('root')
)