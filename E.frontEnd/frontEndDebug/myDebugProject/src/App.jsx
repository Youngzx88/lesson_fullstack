import { useEffect, useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Son from './Son'
function App() {
  const [fatherText, setFatherText] = useState('')
  const [sonText, setSonText] = useState('')
  const [value, setValue] = useState(1)

  const [visible,setVisible] = useState(1);
  const [visible2,setVisible2] = useState(1);
  
  const handleValue = () => {
    setValue(value+1)
  }

  useLayoutEffect(()=>{
      setVisible(0)
  })
  useEffect(()=>{
      setVisible2(0)
  })
  console.log("visible,visible2",visible,visible2)
  return (
    <div className="App">
      <div style={{border:'1px solid black',width:'300px',height:'200px'}}>
        <input type="text" value={fatherText} onChange={(e)=>{setFatherText(e.target.value)}}/>
        <div>子组件输入内容:{sonText}</div>
      </div>
      <Son fatherText={fatherText} sonText={sonText} setSonText={setSonText}></Son>
      <div onClick={handleValue}>值:{value}</div>
      {
        visible ? '': <div>2</div>
      }
      {
        visible2 ? '' : <div>2</div>
      }
    </div>
  )
}

export default App