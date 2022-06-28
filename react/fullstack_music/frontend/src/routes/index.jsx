import { lazy, Suspense } from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'
import Recommend from '@/pages/Recommend'
const Singers = lazy(() => import('@/pages/Singers'))
const Rank = lazy(() => import('@/pages/Rank'))

const RouterConfig = () => {
    return (
        <Suspense fallback={null}>
            <Routes>
                {/* 实现首页路由的默认跳转 */}
                <Route path="/" element={<Navigate to="/recommend" replace={true}/>} />
                <Route path="/recommend" element={<Recommend />} />
                <Route path="/singers" element={<Singers />} />
                <Route path="/rank" element={<Rank />} />
            </Routes>
        </Suspense>
    )
}

export default RouterConfig