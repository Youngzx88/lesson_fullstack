/*
 * @Date         : 2022-06-16 21:25:24
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 21:25:55
 * @description  : 
 */
import React, { useState, useEffect } from 'react'
import { getCities } from '../../api/request'
import { CityWrapper } from './style'
import { Link } from 'react-router-dom'

export default function Cities() {
  const [cities, setCities] = useState([])
  useEffect(() => {
    (async () => {
      let { data } = await getCities()
      // console.log(data)
      setCities(data)
    })()
  })

  const renderCities = () => {
    return cities.map(({id,nm}) => {
      // 路由传参
      return <Link
        className="city_name"
        to={{
          pathname: '/home',
          search: `name=${nm}`
          // search: "name=" + nm
        }}
        key={id}>
        {nm}
      </Link>
    })
  }



  return (
    <CityWrapper>
      {renderCities()}
    </CityWrapper>
  )
}