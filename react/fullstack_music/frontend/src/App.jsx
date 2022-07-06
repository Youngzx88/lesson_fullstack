import { useState, useEffect } from 'react'
import './App.css'
import { Top, Tab, TabItem } from './style'
import { useNavigate, NavLink } from 'react-router-dom'
import RouterConfig from './routes'

// 子组件 
function App(props) {
  let { singers, users } = props
  const navigate = useNavigate()
  // 有了redux 后， 页面组件不再做数据管理 
  return (
    <div className="App">
      {/* layout  */}
      <Top>
        <span
          className="iconfont menu"
          onClick={() => alert("用户中心正在开发中，敬请期待:)")}
        >
          &#xe65c;
        </span>
        <span className="title">云音悦</span>
        <span
          className="iconfont search"
          onClick={() => navigate("/search")}
        >
          &#xe62b;
        </span>
      </Top>
      <Tab>
        <NavLink to="/recommend">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank">
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      <RouterConfig />
    </div>
  )
}
// state 是redux 负责的所有子仓数据\c\
// connect 是api 
// 组件数据管理功能被收回 
// 组件， 通过connect 连上store store未来去管理数据
// redux 让数据管理更科学 开发工艺 
// redux 就是数据管理学
// 把store中的状态以props的形式引到组件中
// state 由redux 给我们的， 状态树
// 以树来组织数据分仓 树根 
export default App
