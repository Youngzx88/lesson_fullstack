import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react';
import { getMenuListRequest } from './api/request';
import { axiosInstance } from './api/config';
import axios from 'axios';
function App() {
  const [count, setCount] = useState(  )
  useEffect(()=>{
    async function click() {
      const res = await axios.get("https://www.fastmock.site/mock/5321bf649d06645c4266f3e0d45ae1cc/menu/all")
      const res2 = await axios.get("https://www.fastmock.site/mock/5321bf649d06645c4266f3e0d45ae1cc/menu/all")
      console.log("res",res)
      console.log("res2",res2)
    }
    click()
  },[])
  return (
    <div className="App">
      index
    </div>
  )
}

export default App
