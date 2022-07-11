import React from 'react'
import { Wrapper,GoodWrapper } from './style'
import Lazyload from 'react-lazyload'
import loading from '../listitem/singer.png'

const Good = ({goodItem}) => (
  <GoodWrapper>
    <div className="good">
      <Lazyload placeholder={
                <img width="100%" height="100%"
                    src={loading}
                />}>
      <img src={goodItem.img} alt=""/>
      </Lazyload>
      <div className="name">{goodItem.goods}</div>
    </div>
  </GoodWrapper>
)

export default function ListItem({menuList,tab}) {
  return (
    <Wrapper>
      {
        menuList.filter((item)=>{
          return (item.title == tab || tab == '全部')
        }).map((item)=>{
          return <Good goodItem={item} key={item.id}/>
        })
      }
      <div className="tips">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实际产品以门店供应为准。</div>
    </Wrapper>
  )
}
