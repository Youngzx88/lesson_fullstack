import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '@/assets/font.css'
import Home from '@/pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <>
    <Home /> 
    <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
)
