import { useState } from 'react'
import MiniCalendar from './components/mini-calendar/index'

function App() {
  return (
    <div style={{margin:10,width:300,height:250}}>
      <MiniCalendar onChange={(date:Date)=>{alert(date)}}></MiniCalendar>
    </div>
  )
}

export default App
