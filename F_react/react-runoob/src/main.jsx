import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'//引入根组件


//root节点 根节点
//root节点范围内react起作用
//React 用来表示UI组件
// let name = "杨仲鑫";
// //1.jsx模板
// const element = <h1 className='young'>hello,{name}</h1>;//jsx的写法
// //2.自定义组件
// const Hello = () =>{
//   return <div>hello{name}</div>
// }
//root以内都生效

// 3. obj Proxy
// 把某个节点渲染为根节点
ReactDOM.createRoot(document.getElementById('root')).render(
    // element
    //xml
    // <Hello></Hello>
    // <div>
    // <h1>hello world</h1>
    // <h2>现在是{dateStr}</h2>
    // </div>
    <App></App>
)
