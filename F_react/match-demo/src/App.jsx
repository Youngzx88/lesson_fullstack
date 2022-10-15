import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Contest from './components/Contest'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Contest/>
    </div>
  )
}

export default App
