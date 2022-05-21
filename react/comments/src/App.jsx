import { useState } from 'react'
import CommentApp from './comments/CommentApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <CommentApp></CommentApp>
    </div>
  )
}

export default App
