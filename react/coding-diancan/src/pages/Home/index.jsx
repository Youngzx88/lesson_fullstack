import React, { useState, useEffect } from 'react'
// import {} from './style'
import CitySelect from './CitySelect'
import { useSearchParams } from 'react-router-dom'
// vite alias 配置
import { getBanners, getRestaurants } from '@/api/request'
import Banners from './Banners'
import SetMeal from './SetMeal'
import StoreList from './StoreList'
import StoreInfo from './StoreInfo'

const Home = () => {
    const [restaurants, setRestaurants] = useState([])
    const [search] = useSearchParams()
    // 获取城市选择的城市
    const cityName = search.get('name') || '';
    const [banners, setBanners] = useState([])

    useEffect(() => {
        (async () => {
            let { data: bannerData } = await getBanners()
            let { data: resData } = await getRestaurants()
            setBanners(bannerData)
            setRestaurants(resData)
        })()
    })
    return (
        <div>
            <CitySelect cityName={cityName} />
            {/* banner业务  广告 */}
            <Banners banners={banners} />
            {/* 单纯切页面 ，把页面展示完成，但功能不展开*/}
            <SetMeal />
            <StoreList />
            <StoreInfo restaurants={restaurants} />
        </div>
    )
}
export default Home;
