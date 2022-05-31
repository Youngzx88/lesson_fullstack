import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [posts,setPosts] = useState([])
  //jsx首屏显示不会受数据请求的阻塞
  useEffect(()=>{
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

    //3.远程接口fast mock
    (async function(){
      const response = await fetch('https://www.fastmock.site/mock/f9755e3a584fdb2f805495e4308be03d/beers/list')
      const data = await response.json();
      console.log(data.beers);
      setPosts(data.beers);
    })()
  },[])

  return (
    <div className="App">
      {!posts.length && <div>正在加载中</div>}
      {posts.length && posts.map(post => <li key={post.id}>{post.title}</li>)}
    </div>
  )
}

export default App
