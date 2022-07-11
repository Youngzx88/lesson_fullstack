import React, { useState,useEffect } from 'react'
import  HelloComponent  from './hello'
import  NameEditComponent  from  './nameEdit'

function App() {
  const [name,setName] = useState("initialName")
  const [editingName,setEditingName] = useState("defaultName")

  // const setUserNameState = (e:any) =>{
  //   setName(e.target.value)
  // }
  useEffect(()=>{
    loadUserName()
  },[]) 

  const loadUserName = () =>{
    setTimeout(()=>{
      setName("Name from async call")
      setEditingName("name from async call")
    },500)
  }

  const setUserNameState = () =>{
    setName(editingName)
  }

  return (
    <div className="App">
      {/* <HelloComponent userName="杨仲鑫" age={22}/> */}
      <HelloComponent userName={name} age={18}/>
      {/* <NameEditComponent userName={name} onNameUpdated={setUserNameState} /> */}
      <NameEditComponent initialUserName={name} editingName={editingName} onNameUpdated={setUserNameState} onEditingNameUpdated={setEditingName}/>
    </div>
  )
}

export default App
