import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'

export default function CitySelect({cityName=''}) {
  
  return (
    <Wrapper>
      <Link
        className="citygps"
        to="/cities">
        <i className="fa fa-map-marker"></i>
        <span>{cityName?cityName:'获取城市路径'}</span>
        <i className="fa fa-sort-desc"></i>
      </Link>
      <div className="header_search">
        <input type="text" placeholder='搜索商家,商品'/>
      </div>
    </Wrapper>
  )
}
