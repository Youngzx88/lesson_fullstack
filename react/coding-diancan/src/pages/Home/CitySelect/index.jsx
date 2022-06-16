import React from 'react'
import {Wrapper} from './style'
import {Link} from 'react-router-dom'

export default function CitySelect() {
  return (
    <Wrapper>
        <Link className="citygps" to='/cities'>
            <i className='fa fa-map-marker'></i>
            <span>获取城市坐标</span>
            <i className='fa fa-sort-desc'></i>
        </Link>

        <div className="header-search">
          <input type="text" placeholder='搜索商家,商品'/>
        </div>
    </Wrapper>
  )
}
