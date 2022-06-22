import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import 'antd/dist/antd.css'
import All from './pages/All'
import Nav from './components/nav'
import "./App.css"

function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/'  element={<All/>}></Route>
        <Route path='/all' element={<All/>}></Route>
        <Route path='/algorithm'></Route>
        <Route path='/database'></Route>
        <Route path='/shell'></Route>
        <Route path='/concurrency'></Route>
      </Routes>
    </div>
  )
}

export default App
