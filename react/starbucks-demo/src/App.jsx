import { useState } from 'react'
import NavBar from './components/nav-bar'
import {Route,Routes} from 'react-router-dom'
import All from './pages/all'
import Beverages from './pages/beverages'
function App() {


  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<All/>}></Route>
          <Route path="/all" element={<All/>}></Route>
          <Route path="/beverages" element={<Beverages/>}></Route>
          <Route path="/food" element={<Beverages/>}></Route>
          <Route path="/coffee" element={<Beverages/>}></Route>
          <Route path="/merchandise" element={<Beverages/>}></Route>
        </Routes>
    </div>
  )
}

export default App
