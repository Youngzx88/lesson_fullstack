import { useState } from 'react'
import './App.css'
import Dog from './Dog'
import Computer from './Computer'
import Notifiaction from './Notification'
// const Dog = () =>{
//   return <div>hello</div>
// }

function App() {
  const [num,setNum] = useState(0)
  setTimeout(()=>{
    setNum(6)
  },2000)
  return (
    <div className="App">
      <Dog></Dog>
      <Computer></Computer>
      <Notifiaction n = {num}></Notifiaction>
    </div>
  )
}

export default App
