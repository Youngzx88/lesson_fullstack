import { useState } from 'react'
import './index.css'
type Props = {}

export default function index({}: Props) {
  const [date, setDate] = useState(new Date())

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
    // 第三个参数为0获得的是上个月的总天数
    return new Date(year, month + 1, 0).getDate()
  }

  const getEmptyDaysInWeek = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const renderDays = () => {
    const days = []
    const getAllDaysArr = getAllDaysOfMonth(
      date.getFullYear(),
      date.getMonth()
    )
    const getEmptyDaysArr = getEmptyDaysInWeek(
      date.getFullYear(),
      date.getMonth()
    )

    // 用上一个月的天数-getAllDaysArr的length+i
    for (let i = 0; i < getEmptyDaysArr; i++) {
      days.push(<div key={`empty-${i}`} className="empty">{new Date(date.getFullYear(), date.getMonth(), 0).getDate() - getEmptyDaysArr + i}</div>);
    }

    for (let i = 1; i <= getAllDaysArr; i++) {
      days.push(<div key={i} className="day">{i}</div>);
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
