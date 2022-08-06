import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home' // 首页是不可以那啥的
// const Search = lazy(() => import ('@/pages/Search'))
// 为何要做路由的封装？
export default () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </>
    )
}

  
