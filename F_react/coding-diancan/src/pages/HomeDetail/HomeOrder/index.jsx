import React, { useEffect, useState } from 'react'
import { getHomeDetailOrder } from '@/api/request'
import HomeDetailBanner from '@/components/HomeDetailBanner'
import SaleDetail from '@/components/SaleDetail'

export default function HomeOrder() {
    const [banners, setBanners] = useState([])
    const [detail, setDetail] = useState([])

    useEffect(() => {
        (async () => {
            let { data } = await getHomeDetailOrder()
            setBanners(data)
            setDetail(data)
        })()
    }, []) 
    return (
        <>
            <HomeDetailBanner banners={banners}/>
            <SaleDetail detail={detail}/>
        </>
    )
}
