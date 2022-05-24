//jsx react用来描述UI的
//转移的过程
//jsx -》 页面上运行
import React from "react"
import ReactDOM from 'react-dom/client'
const Hello = () => <div>Hello world!</div>


ReactDOM.createRoot(document.getElementById('root')).render(
    <Hello/>
)
