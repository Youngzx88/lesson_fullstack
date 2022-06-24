import React,{useEffect,useState} from 'react'
import { Wrapper } from './style'
import { getMenu } from '../../api/request'
import { List } from 'antd-mobile'

export default function ListItem() {
  const [list,setList] = useState([])
  
  useEffect(()=>{
    (async()=>{
      const {data} = await getMenu();
      // console.log(data)
      setList(data);
    })()
  })

  return (
    <Wrapper>
      
    </Wrapper>
  )
}
