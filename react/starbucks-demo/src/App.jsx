import React,{ useState,useEffect } from 'react'
import Footer from './components/Footer'
import RoutesConfig from './routes'
import { useNavigate } from 'react-router-dom'
function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/Menu')
  },[])
  
  return (
    <div className="App">
        {/* <Menu/> */}
        <RoutesConfig/>
        <Footer/>
    </div>
  )
}

export default App