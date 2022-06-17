import React, { useState,useEffect } from 'react'
import CitySelect from './CitySelect'
import { useSearchParams } from 'react-router-dom'
import {getBanners} from '../../api/request'
import Banners from './Banners'
export default function Home() {
  const [search] = useSearchParams()
  const cityName = search.get(`name` || '')
  const [banners,setBanners] = useState([])
  
  useEffect(()=>{
    (async()=>{
      let {data} = await getBanners()
      
    })()
  })

  return (
    <div>
        <CitySelect cityName={cityName}/>
        {/* Banner业务 */}
        <Banners banners={banners}/>
    </div>
  )
}
