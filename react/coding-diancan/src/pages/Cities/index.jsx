import React,{useState,useEffect} from 'react'
import {getCities} from '../../api/request'
import { CityWrapper } from './style'
import {Link} from 'react-router-dom'

export default function Cities() {
  const [cities,setCities] = useState([])
  useEffect(()=>{
    (async()=>{
      let {data} = await getCities()
      // console.log(data)
      setCities(data)
    })()
  })

  const renderCities = ()=>{
    return cities.map(item =>{
      // queryString 通过参数search传递
      return <Link className="city_name" to={{pathname:"/home"||'/',search:`name=${item.nm}`}} key={item.id}>
                {item.nm}
            </Link>
    }) 
  }
  return (
    <CityWrapper>
      {renderCities()}
    </CityWrapper>
  )
}
