import { useState, useEffect, Suspense } from 'react'
import './App.css'
import { 
  getVideosRequest,
  getHotwordRequest
} from '@/api/index'
import Routes from '@/routes'

function App() {
  useEffect(() => {
    getVideosRequest()
      .then(data => {
        console.log(data, '/////////')
      })
    getHotwordRequest()
      .then(data => {
        console.log(data);
      })
    // fetch('https://s.search.bilibili.com/main/suggest?func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&bangumi_acc_num=3&special_acc_num=0&upuser_acc_num=0&tag_num=10&term=%E5%91%A8%E6%9D%B0&rnd=0.0800568316819219')
    //   .then(data => data.json())
    //   .then(data => {
    //     console.log(data,'----------------');
    //   })
  }, [])
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Routes/>
      </Suspense>
    </div>
  )
}

export default App
