import React from 'react'
import { Wrapper,GoodWrapper } from './style'

const Good = ({goodItem}) => (
  <GoodWrapper>
    <div className="good">
      <img src={goodItem.img} alt=""/>
      <div className="name">{goodItem.goods}</div>
    </div>
  </GoodWrapper>
)

export default function ListItem({menuList}) {
  return (
    <Wrapper>
      {
        menuList.map(
          (item)=>(
            <Good goodItem={item} key={item.id}/>
          )
        )
      }
      {/* <span className="tips">实际产品以门店供应为准</span> */}
    </Wrapper>
  )
}
