// 独立配置文件 
import { useState, lazy } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Home from '../pages/Home'
const Order = lazy(() => import('../pages/Order'))
const Find = lazy(() => import('../pages/Find'))
const Mine = lazy(() => import('../pages/Mine'))
const Cities = lazy(() => import('../pages/Cities'))
const HomeDetail = lazy(() => import('../pages/HomeDetail'))
const HomeOrder = lazy(() => import('../pages/HomeDetail/HomeOrder'))
const HomeComment = lazy(() => import('../pages/HomeDetail/HomeComment'))
const HomeBusiness = lazy(() => import('../pages/HomeDetail/HomeBusiness'))

// Routes 不能和react-router-dom 一样
const RoutesConfig = () => {

    return (
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/find" element={<Find />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/mine" element={<Mine />}></Route>
                <Route path="/cities" element={<Cities />}></Route>
                <Route path="/homedetail/:id" element={<HomeDetail />}>
                    <Route path="/homedetail/:id/order" element={<HomeOrder/>}/>
                    <Route path="/homedetail/:id/comment" element={<HomeComment/>}/>
                    <Route path="/homedetail/:id/business" element={<HomeBusiness/>}/>
                </Route>
            </Routes>
    )
}

export default RoutesConfig