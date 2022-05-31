import { useState, useEffect } from 'react'
import List from './List'
import axios from 'axios'

// 2s+ loading...   list 显示出来
// fast mock 比json-server  更专业
const Loading = () => {
  return (
    <>
      加载中...
    </>
  )
}
function App() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])
  // 数据请求放到父组件里面 App 自有的 管理， 多个组件共享
  useEffect(() => {
    axios
      .get('https://www.fastmock.site/mock/3f112f6cb2f621fc9c2dd6a14be19f38/beers/booklist')
      .then(res => {
        // console.log(data)
        if (res.data) { // 安全一些
          setList(res.data)
          setLoading(false)
          console.log(res.data, '///////')
        } else {
          console.log('出问题了...')
        }
      })
  }, [])

  return (
    <div className="App">
      {loading ? <Loading />: <List data={list}/>}
    </div>
  )
}

export default App
