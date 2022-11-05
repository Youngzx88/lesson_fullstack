import { useState } from 'react'
import produce from 'immer'

function App() {
  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(
      produce((draft) => {
        draft.count = 100
      })
    )
  }
  return (
    <div className="App">
      <div style={{ color: 'red' }} onClick={handleCount}>
        {count}
      </div>
    </div>
  )
}

export default App
