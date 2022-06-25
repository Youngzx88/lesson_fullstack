import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
import { getMenu } from '../../api/request'
import Item from '../item'

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
      <Item list={list} />
    </Wrapper>
  )
}
