import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import VirtualDom from './virtualDom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <VirtualDom></VirtualDom>
    </div>
  )
}

export default App
