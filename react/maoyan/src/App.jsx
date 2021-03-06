import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import classnames from 'classnames'
import WeUI from 'react-weui'
import Contest from './components/contest'
import { getContestData } from './api/request'
const {
  Toast
} = WeUI


function App() {
  const [list,setList] = useState([])
  const [tab, setTab] = useState('all')
  const [showLoading, setShowLoading] = useState(false)
  const tabClasses = ['item']

  useEffect(() => {
    setTimeout(() => {
      setTab('dj')
    }, 2000)
  })

  useEffect(() => {
    (async ()=>{
      setShowLoading(true)
      let {data} = await getContestData()
      setList([
        ...data
      ])
      setShowLoading(false)
    })()
  }, [tab])

  useEffect(()=>{
    if(list.length>0){
      setShowLoading(false)
    }
  },[list])

  return (
    <div className="App">
      <Contest data={list} tab={tab}/>
      <Toast  icon="loading" show={showLoading}>加载中...</Toast>
    </div>
  )
}

export default App

