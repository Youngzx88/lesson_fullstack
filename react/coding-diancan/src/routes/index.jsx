import { Suspense,lazy,Switch } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
const  HomeDetail = lazy(()=>import('../pages/HomeDetail'))
const  Order = lazy(()=>import('../pages/Order'))
const  Find = lazy(()=>import('../pages/Find'))
const  Mine = lazy(()=>import('../pages/Mine'))
const  Cities = lazy(()=>import('../pages/Cities'))


export const RoutesConfig = ()=>{
    return (
        <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/find" element={<Find />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/mine" element={<Mine />}></Route>
                <Route path="/cities" element={<Cities />}></Route>
                <Route path='/homedetail' element={<HomeDetail/>}></Route>
        </Routes>
    )
}