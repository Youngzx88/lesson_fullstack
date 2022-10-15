import { useState,useEffect } from 'react'
import Header from './Header'
import Loader from './Loader'
import Results from './Results'
import axios from 'axios'

function App() {
  //数据驱动的界面
  const [beers,setBeers] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    // 优先显示组件，延后加载数据
      //1.
      // fetch('http://localhost:1234/beers')
      //   .then(data => data.json())
      //   .then(data =>{
      //     // console.log(data);
      //     setPosts(data);
      //   })
      // },[])
  
      //2.本地json-server
      // (async function(){
      //   const result = await fetch(' http://localhost:1234/beers')
      //   const data = await result.json();
      //   // console.log(data);
      //   setPosts(data);
      // })()
  
      // //3.远程接口fast mock
      // (async function(){
      //   const response = await fetch('https://www.fastmock.site/mock/f9755e3a584fdb2f805495e4308be03d/beers/list')
      //   const data = await response.json();
      //   setBeers(data.beers);
      //   setLoading(false);
      // })()

      //4. 使用axios
      (async function(){
        const data = await axios.get('https://www.fastmock.site/mock/f9755e3a584fdb2f805495e4308be03d/beers/list')
        setBeers(data.data.beers);
        setLoading(false);
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