import { useState,useEffect } from 'react'
import {Routes,Route,Link,useNavigate} from 'react-router-dom'
import Detail from './Detail'
import User from './User'
import Home from './Home'

function App() {
  const navigate = useNavigate();
  setTimeout(()=>{
    //js跳转url
    useEffect(()=>{
      // js跳转BOM原始
      navigate('./post/7774733800363065351')
      // window.location.href = '/post/7774733800363065351'
      // history.pushState(null,null,'/post/7774733800363065351')
    },[])
  },2000)
  
  return (
    <div className="App">
      <nav>
        {/* 传统路由 */}
        <Link to={'/post/?id=8889733800363065351'}>详情页1</Link>
        {/* 动态路由 */}
        <Link to={'/post/7774733800363065351'}>详情页2</Link>
        <Link to={'/user'}>用户文章展示页</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Detail/>}/>
        <Route path="/post/:id" element={<Detail/>}/>
        <Route path="/user" element={<User/>}/>
        {/* 404page elemeny */}
      </Routes>
    </div>
  )
}

export default App