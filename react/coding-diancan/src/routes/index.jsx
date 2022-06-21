// 独立配置文件，路由配置
import React from 'react'
import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
// import HomeDetail from '../pages/HomeDetail'
// 这样import浪费资源，影响首页速度，应该不点击就不会加载（推迟加载），切换到路由后加载
// import HomeDetail from './pages/HomeDetail'
const HomeDetail = lazy(() => import('../pages/HomeDetail'))
const Cities = lazy(() => import('../pages/Cities'))
const Mine = lazy(() => import('../pages/Mine'))
const Find = lazy(() => import('../pages/Find'))
const Order = lazy(() => import('../pages/Order'))
const HomeOrder = lazy(() => import('../pages/HomeDetail/HomeOrder'))
const HomeComment = lazy(() => import('../pages/HomeDetail/HomeComment'))
const HomeBusiness = lazy(() => import('../pages/HomeDetail/HomeBusiness'))



export default function RoutesConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/find' element={<Find />}></Route>
        <Route path='/mine' element={<Mine />}></Route>
        <Route path='/cities' element={<Cities />}></Route>
        <Route path='/homedetail/:id' element={<HomeDetail />}>
            {/* 二级路由 */}
            <Route path='/homedetail/:id/order' element={<HomeOrder />}></Route>
            <Route path='/homedetail/:id/comment' element={<HomeComment />}></Route>
            <Route path='/homedetail/:id/business' element={<HomeBusiness />}></Route>
        </Route>
    </Routes>
  )
}
