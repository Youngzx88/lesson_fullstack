import { useState,useEffect } from 'react'
import Header from './Header'
import Loader from './Loader'
import Results from './Results'
import 'weui'

function App() {
  //数据驱动的界面
  const [beers,setBeers] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    // 优先显示组件，延后加载数据
    (async function(){
      const response = await fetch('http://localhost:8080/beers')
      const data = await response.json()
      setBeers(data)
      setLoading(false)
    })()
  },[])
  return (
    <div className="wrapper">
        {/* 非自有的props 其实让组件更好的复用及协作 */}
        <Header siteName="Beer me!"></Header>
        {/* 状态组件，页面的一种状态 */}
        {loading && <Loader message="正在加载啤酒列表..."/>}
        <Results beers={beers} loading={loading}/>
    </div>
  )
}
 
export default App
