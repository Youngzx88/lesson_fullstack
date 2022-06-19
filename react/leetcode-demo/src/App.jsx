import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Nav from './components/nav'
import 'antd/dist/antd.css'
import QuestionList from './components/quesionList'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/'></Route>
        <Route path='/all'></Route>
        <Route path='/algorithm'></Route>
        <Route path='/database'></Route>
        <Route path='/shell'></Route>
        <Route path='/concurrency'></Route>
      </Routes>
      <QuestionList/>
    </div>
  )
}

export default App
