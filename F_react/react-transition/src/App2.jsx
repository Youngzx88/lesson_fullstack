import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import _ from 'lodash'

function App() {
  const [value,setValue] = useState('')
  let currentValue = ''
  const handleChange = (e) =>{
    currentValue = e.target.value
    setValue(currentValue)
  }
  return (
    <div className="container">
      <input type="text" onChange={_.debounce(handleChange,300)}/>
      <div>{value}</div>
      <div className="list">
        {
          // 元素的更新耗内存,lodash封装了节流
          Array(100)
          .fill("a")
          .map(
            (item,index)=>(
              <div key={index}>{value}</div>
            )
          )
        }
      </div>
    </div>
  )
}

export default App
