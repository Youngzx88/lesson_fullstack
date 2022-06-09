import { useState, useEffect } from 'react'
import './App.css'
import { fetchTodos } from './api'
import 'antd/dist/antd.css' // 引入UI框架的样式
import { Spin, Tabs } from 'antd'
const { TabPane } = Tabs
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  const [activeKey, setActiveKey] = useState('全部')
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // 请求数据
    // setLoading(true)
    //fetchTodos ？ 参数对象来组织
    fetchTodos({query: 'todo', tab: 'finished'})
      .then((data) => {
        setLoading(false)
        // console.log(data);
        setTodos([...data.result])
      })
  }, [])
  return (
    <>
      {/* 70%的通用业务组件， 属于框架提供 */}
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        <TabPane tab="全部" key="全部"/>
        <TabPane tab="已完成" key="已完成"/>
        <TabPane tab="未完成" key="未完成"/>
      </Tabs>
      <Spin spinning={loading} tip="加载中~">
        {/* 业务组件， 显示任务列表 */}
        <TodoList todos={todos}/>
      </Spin>
    </>
  )
}

export default App

