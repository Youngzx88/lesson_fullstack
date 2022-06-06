import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'

function App() {

  return (
    <div className="App">
      {/* 路由的配置 */}
      <nav>
        <Link to={"/"}>首页</Link>
        <Link to={"/About"}>关于</Link>
      </nav>
      
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App
