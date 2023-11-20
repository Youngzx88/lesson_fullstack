import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/index'
import Resume from '../pages/resume/index'
export default function RouterInfo() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/resume" Component={Resume}></Route>
      </Routes>
    </div>
  )
}
