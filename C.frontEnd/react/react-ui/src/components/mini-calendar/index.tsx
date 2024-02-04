import { useState } from 'react'
import './index.css'
type CalendarProps = {
  value?: Date;
  onChange: (date:Date) => void
}

const Calendar:React.FunctionComponent<CalendarProps> = ({value=(new Date()),onChange}: CalendarProps) => {
  const [date, setDate] = useState(value)
  // const [selectDay, setSelectDay] = useState(value.getDate())

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }

  const MonthNames = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ]

  const getAllDaysOfMonth = (year: number, month: number) => {
    // month是从0开始
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstEmptyDaysInWeek = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const getLastEmptyDaysInWeek = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDay()
  }

  const renderDays = () => {
    const days = []
    const getAllDaysArr = getAllDaysOfMonth(
      date.getFullYear(),
      date.getMonth()
    )
    const getFirstEmptyDaysArr = getFirstEmptyDaysInWeek(
      date.getFullYear(),
      date.getMonth()
    )
    const getLastEmptyDaysArr = getLastEmptyDaysInWeek(
      date.getFullYear(),
      date.getMonth()
    )
    // 用上一个月的天数-getAllDaysArr的length+i,得到上个月的天数
    for (let i = 1; i <= getFirstEmptyDaysArr; i++) {
      days.push(<div key={`emptyFirst-${i}`} onClick={()=>{handlePrevMonth()}} className="empty">{new Date(date.getFullYear(), date.getMonth(), 0).getDate() - getFirstEmptyDaysArr + i}</div>);
    }
    // 得到当前月的天数
    for (let i = 1; i <= getAllDaysArr; i++) {
      // 每当点击就执行调用Calendar组件的onChange回调函数，并修改this的绑定
      const handleChange = () => {
        return onChange?.bind(null, new Date(date.getFullYear(), date.getMonth(), i))();
      }
      if(i === date.getDate()){
        days.push(<div key={i} className="day selectDay" onClick={()=>handleChange()}>{i}</div>);
      }else{
        days.push(<div key={i} className="day" onClick={() => handleChange()}>{i}</div>);
      }
    }
    // 得到下个月的天数
    let i = 1;
    let nextDayInThisMonth = getLastEmptyDaysArr
    while(nextDayInThisMonth + 1 < 7){
      nextDayInThisMonth++
      days.push(<div key={`emptyLast-${nextDayInThisMonth}`} onClick={()=>handleNextMonth()} className="empty">{i++}</div>);
    }
    return days
  }

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => handlePrevMonth()}>&lt;</button>
        <div>
          {date.getFullYear()} 年 {MonthNames[date.getMonth()]}
        </div>
        <button onClick={() => handleNextMonth()}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        <div className="day">日</div>
        {renderDays()}
      </div>
    </div>
  )
}

export default Calendar
