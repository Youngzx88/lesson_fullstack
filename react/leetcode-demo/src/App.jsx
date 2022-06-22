import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import 'antd/dist/antd.css'
import All from './pages/All'

function App() {

  return (
    <div className="App">
      <All/>
      <Routes>
        <Route path='/'></Route>
        <Route path='/all'></Route>
        <Route path='/algorithm'></Route>
        <Route path='/database'></Route>
        <Route path='/shell'></Route>
        <Route path='/concurrency'></Route>
      </Routes>
    </div>
  )
}

export default App
