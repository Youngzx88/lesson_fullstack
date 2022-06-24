import React,{useEffect} from 'react'
import { Wrapper } from '../../pages/menu-list/style'
import Item from '../item'
import { getMenu } from '../../api/request'

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
        <Item data={list}/>
        <Item />
        <Item/>
        <Item/>
        <Item/>
    </Wrapper>
  )
}
