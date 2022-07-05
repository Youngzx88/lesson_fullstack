import React,{ useState,useEffect } from 'react'
import Footer from './components/Footer'
import Menu from './pages/menu/index'

function App() {
  return (
    <div className="App">
        <Menu/>
        <Footer/>
    </div>
  )
}

export default App