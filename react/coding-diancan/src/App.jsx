import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { RoutesConfig } from './routes'
//推迟加载运行
//切换到这个路由后加载，按需加载
// import HomeDetail from './pages/HomeDetail'

function App() {
  return (
    <div className="App">
      <Header/>
      <RoutesConfig/>
      <Footer/>
    </div>
  )
}

export default App