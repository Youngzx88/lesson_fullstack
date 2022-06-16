import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { pageTitle } from '../../config'

export default function Header(props) {
  //1.路由参数，不能通过传参得到
  // const {title="饿了么"} = props

  //2.BOM
  // const [title,setTitle] = useState('饿了么')
  // useEffect(()=>{
  //   const location = window.location.pathname;
  //   // console.log(location)
  //   // 未来可能有很多分支
  //   let _title;
  //   if(location == '/order'){
  //     _title='订单页面'
  //   }else if(location == '/home' || location == '/'){
  //     _title="首页"
  //   }
  //   setTitle(_title);
  // },[])

  //3. useLocation(react-router-dom)
  // const [title,setTitle] = useState('饿了么')
  // const {pathname='/'} = useLocation()
  // useEffect(()=>{
  //     let _title;
  //     if(pathname == '/order'){
  //       _title='订单页面'
  //     }else if(pathname == '/home' || location == '/'){
  //       _title="首页"
  //     }
  //     setTitle(_title);
  // })

  //4.封装成配置文件
  const [title,setTitle] = useState('饿了么')
  const {pathname='/'} = useLocation()
  useEffect(()=>{
      let _title = pageTitle[pathname] || ''
      setTitle(_title);
  })

  return (
    <div>
        <header>{title}</header>
    </div>
  )
}
