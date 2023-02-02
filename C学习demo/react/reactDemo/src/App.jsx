import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    },1000)
  },)
  return (
    <div className="App">
      <div>
        {count}
      </div>
    </div>
  )
}

export default App
