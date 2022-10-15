import Home from '../pages/home'
import { Routes,Route } from 'react-router'
export default function RoutesConfig(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  )
}