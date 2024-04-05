import './index.scss'
import { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { useState } from 'react'

type CalendarProps = {
  value: Dayjs
  onChange: () => void
}

const weekList = ['一', '二', '三', '四', '五', '六', '日']

const renderDays = (value: Dayjs) => {
  let days = []
  const firstDay = value.startOf('month').day()
  const totalDay = value.daysInMonth()
  const lastDayOfPreviousMonth = dayjs()
    .subtract(1, 'month')
    .endOf('month')
    .date()
  // 渲染上个月的数组
  for (
    let i = lastDayOfPreviousMonth - ( firstDay - 2 );
    i <= lastDayOfPreviousMonth;
    i++
  ) {
    days.push(
      <div className="calendar-content-days-cell">
        <div className="calendar-content-days-cell-item-empty">{i}</div>
      </div>
    )
  } 
  // 渲染当前月的数组
  for (let i = 1; i <= totalDay; i++) {
    days.push(
      <div className="calendar-content-days-cell">
        <div className="calendar-content-days-cell-item">{i}</div>
      </div>
    )
  }
  // 不满42个也把后面的渲染出来
  if (days.length < 42) {
    for (let i = 1; days.length < 42; i++) {
      days.push(
        <div className="calendar-content-days-cell">
          <div className="calendar-content-days-cell-item-empty">{i}</div>
        </div>
      )
    }
  }
  return days
}

const renderYMD = (value: Dayjs) => {
  const format = value.format('YYYY 年 MM 月 DD 日')
  return <div className="calendar-header-title">{format}</div>
}

export default function index({ value = dayjs(), onChange }: CalendarProps) {
  const [date, setDate] = useState(value)

  const handleBeforeMonth = () => {
    setDate
      (prev => prev.add(-1, 'month'))
  }

  const handleNextMonth = () => {
    setDate
      (prev => prev.add(1, 'month'))
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-header-left" onClick={()=>handleBeforeMonth()}>&lt;</button>
        <div className="calendar-header-value">{
          renderYMD(date)
        }</div>
        <button className="calendar-header-right" onClick={()=>handleNextMonth()}>&gt;</button>
      </div>
      <div className="calendar-content-week">
        {weekList.map((item: string) => {
          return (
            <div className="calendar-content-week-item calendar-content-week-item-select">
              {item}
            </div>
          )
        })}
      </div>
      <div className="calendar-content-days">{renderDays(date)}</div>
    </div> 
  )
}
