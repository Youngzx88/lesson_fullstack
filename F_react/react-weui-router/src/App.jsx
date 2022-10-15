import { useState } from 'react'
import 'weui'
import 'react-weui/build/packages/react-weui.css'
import './App.css'
import User from './User'
import Address from './Address'
import {Routes,Route,Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Link to={"/user"}>用户</Link>
      {/* 这个时候访问  http://localhost:3000/user即可*/}
      <Routes>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/address' element={<Address/>}></Route>
      </Routes>
    </div>
  )
}

export default App
