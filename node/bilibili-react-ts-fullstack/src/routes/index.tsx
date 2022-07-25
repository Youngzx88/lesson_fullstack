import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home'
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

  
