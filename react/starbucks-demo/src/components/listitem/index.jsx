import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
import { getMenu } from '../../api/request'
import Item from '../item'

// listitem里面遍历title，到item去遍历具体的数据
export default function ListItem() {
  const [list, setList] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await getMenu()
      setList(data)
    })()
  })

  return (
    <Wrapper>
      {list.map(
        item => (
          <>
          <h3 className="title" key={item.id}>{item.title}</h3>
          <Item list={list} />
          </>
        )
      )}
      
    </Wrapper>
  )
}
