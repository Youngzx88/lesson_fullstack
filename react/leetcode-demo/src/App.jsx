import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import 'antd/dist/antd.css'
import "./App.css"
import All from './pages/All'
import Nav from './components/nav'
import Ad from './components/Ad'

function App() {

  return (
    <div className="App">
      <div className="nav">
        <Nav/>
      </div>
      <div className="right-side">
        <Ad/>
      </div>
      
      <Routes>
        <Route path='/'  element={<All/>}></Route>
        <Route path='/all' element={<All/>}></Route>
        <Route path='/algorithm'></Route>
        <Route path='/database'></Route>
        <Route path='/shell'></Route>
        <Route path='/concurrency'></Route>
        <Route path='/twoSum'></Route>
      </Routes>
    </div>
  )
}

export default App
