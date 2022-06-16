import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Index'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/' element={<Home/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
