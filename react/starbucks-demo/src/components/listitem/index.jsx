import React from 'react'
import { Wrapper,GoodWrapper } from './style'

const Good = ({item}) => (
  <GoodWrapper>
      <img src={item.img} alt=""/>
      <div className="name">{item.goods}</div>
  </GoodWrapper>
)

export default function ListItem({menuList}) {
  return (
    <Wrapper>
      {
        menuList.map(
          (item)=>(
            <Good key={item.id} item={item}/>
          )
        )
      }
    </Wrapper>
  )
}
