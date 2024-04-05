import { useState } from 'react'
import MiniCalendar from './components/mini-calendar/index'
import Calendar from './components/calendar/index'
import dayjs from 'dayjs'
import { Dayjs } from 'dayjs'

function App() {
  const [date,setDate] = useState<Dayjs>(dayjs())

  return (
    <div style={{width:'60%',padding:5,boxSizing:'border-box'}}>
      <Calendar value={date} onChange={()=>{console.log(1)}}></Calendar>
    </div>
  )
}

export default App
