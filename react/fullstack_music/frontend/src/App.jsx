import { useState, useEffect } from 'react'
import './App.css'
import {connect} from 'react-redux'

//子组件
function App(props) {
  console.log(props,'---------------')
  let {singers,users} = props
  const [count, setCount] = useState(0)
  // 有了redux后，页面组件不再做数据管理
  return (
    <div className="App">
      {
        users.map(user => <div key={user.id}>{user.name}</div>)
      }
    </div>
  )
}


// state是redux负责的所有子仓数据
// state由redux给我们的，状态树，以树来组织数据分仓
const mapStateToProps = (state) =>{
  return {
    // 首页想要展示singer的数据
      singers: state.singer.singers,
      users: state.user.users

  }
}
// connect是api，实现组件数据管理功能被收回，组件通过connect连上store，store来去管理数据
//第一个参数：一个函数(把store中的状态以props的形式引到我们的组件中)
export default connect(mapStateToProps)(App)
