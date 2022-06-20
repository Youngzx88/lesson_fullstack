import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import Find from './pages/Find'
import Mine from './pages/Mine'
import Cities from './pages/Cities'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/find" element={<Find />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/mine" element={<Mine />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App