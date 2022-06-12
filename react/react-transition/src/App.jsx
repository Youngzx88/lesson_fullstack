import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import {Routes,Route,Link} from 'react-router-dom'

const Index = ()=>{
    useEffect(()=>{
        console.log(`useEffect =>你来到index页面`)
        return ()=>{
            console.log('你离开了index页面')
        }
    })
    return (
        <>
        Index
        </>
    )
}
const List = ()=>{
    useEffect(()=>{
        console.log(`useEffect =>你来到list页面`)
        // 当一个组件卸载的时候会执行返回的东西
        return ()=>{
            console.log('你离开了list页面')
        }
    })
    return (
        <>
        List
        </>
    )
}

function App() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log(`useEffect => You clicked ${count}times`)
    },[count])
    return (
    <div className="container">
        <div>
            <p>Yuo clicked{count}times</p>
            <button onClick={()=>setCount(count+1)}>click me</button>
        </div>
        <ul>
            <li>
                <Link to="/">首页</Link>
            </li>
            <li>
                <Link to="/list">列表</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/" element={<Index/>}></Route>
            <Route path="/list" element={<List/>}></Route>
        </Routes>
    </div>
    ) 
} 

export default App