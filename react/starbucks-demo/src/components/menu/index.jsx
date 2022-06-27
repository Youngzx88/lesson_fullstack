import React,{useState,useEffect}from 'react'
import { Wrapper } from './style.js'
import NavBar from '../navbar/index.jsx'
import { Tab, Toast } from 'react-weui'
import {getMenuList} from '../../api/request'
import ListItem from '../listitem'
import EmptyItem from '../emptylist'

export default function Menu() {
  const [loading,setLoading]=useState(false);
  const [menuList,setMenuList] = useState([0])
  const [tab,setTab] = useState("全部")

  const Fn = (tabname) =>{
    setTab(tabname)
  }
  useEffect(() => { 
    setLoading(true);
    (async()=>{
      const {data} = await getMenuList({tab});
      setMenuList(data)
    })()
    setLoading(false)
  },[])
  
  return (
    <Wrapper>
      <NavBar tab={tab} Fn={Fn}/>
      {/* 过渡动画 */}
      {<Toast show={loading} icon="loading">加载中...</Toast>}
      {menuList.length>0 ? <ListItem menuList={menuList}/> : <EmptyItem/>}
    </Wrapper>
  )
}
