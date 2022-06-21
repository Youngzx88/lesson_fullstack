/*
 * @Date         : 2022-06-16 20:47:54
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 21:20:24
 * @description  : 
 */
import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'


export default function CitySelect({cityName=''}) {
    // const [search] = useSearchParams()
    // // 获取城市选择的城市
    // const cityName = search.get('name') || '';
    // // console.log(cityName)
    return (
        <Wrapper>
            <Link
                className="citygps"
                to="/cities">
                <i className="fa fa-map-marker"></i>
                <span>{cityName ? cityName : '获取城市名称'}</span>
                <i className="fa fa-sort-desc"></i>
            </Link>
            <div className="header_search">
                <input type="text" placeholder='搜索商家,商品' />
            </div>
        </Wrapper>
    )
}
