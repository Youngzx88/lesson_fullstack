import { useState,useEffect } from 'react'
import { fetchTodos } from './api';

function App() {
  const [todos,setTodos] = useState([]);
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    //请求数据,参数用对象组织
    fetchTodos({query:'todo',tab:'finished'})
      .then((data)=>{
        console.log(data)
      })
  },[])
  return (
    <div className="App">

    </div>
  )
}

export default App
