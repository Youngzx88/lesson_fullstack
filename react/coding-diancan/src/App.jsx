import { useState, Suspense } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RoutesConfig from './routes'

function App() {

  return (
    <div className="App">
      <Header/>
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App