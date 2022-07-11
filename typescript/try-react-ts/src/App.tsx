import React, { useState } from 'react'
import  HelloComponent  from './hello'
import NameEditComponent from './nameEdit'
function App() {
  const [name,setName] = useState("initialName")

  const setUserNameState = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setName(e.target.value)
  }
  return (
    <div className="App">
      {/* <HelloComponent userName="杨仲鑫" age={22}/> */}
      <HelloComponent userName={name} age={18}/>
      <NameEditComponent userName={name} onChange={setUserNameState} />
    </div>
  )
}

export default App
