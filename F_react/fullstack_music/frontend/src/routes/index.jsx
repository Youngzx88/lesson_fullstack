import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Recommend from '@/pages/Recommend'
const Singers = lazy(() => import('@/pages/Singers'));
const Rank = lazy(() => import('@/pages/Rank'));
const Search = lazy(() => import('@/pages/Search'));
const RouterConfig = () => {
    return (
        <Suspense fallback={null}>
            <Routes>
                {/* redirect 重定向 */}
                <Route path="/" element={<Navigate to="/recommend" replace={true}/>} />
                <Route path="/recommend" element={<Recommend />} />
                <Route path="/singers" element={<Singers />} />
                <Route path="/rank" element={<Rank />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Suspense>
    )
}

export default RouterConfig