import { useState, useEffect } from 'react'
import './App.css'
import { fetchTodos } from './api'
import 'antd/dist/antd.css' // 引入UI框架的样式
import { Spin, Tabs } from 'antd'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
const { TabPane } = Tabs

function App() {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState(''); 
  const [activeKey, setActiveKey] = useState('全部')
  const [loading, setLoading] = useState(true);
  const [placeholder, setPlaceholder] = useState('') 
  const onSetQuery = (query) => {
    // console.log(query)
    setQuery(query)
  }

  const onDelete = (id) => {
    // console.log(id, '----------------')
    let newTodos = todos.filter(todo => todo.id != id)
    setTodos([
      ...newTodos
    ])
  }

  useEffect(() => {
    // 该做的onload 
    //  更新
    setLoading(true)
    setPlaceholder(`在${activeKey}内搜索`)
  }, [activeKey])

  useEffect(() => {
    // useEffect 不只是做生命周期的onload 
    // 做更新
    // console.log('更新')
    setLoading(true)
    fetchTodos({query, tab: activeKey})
      .then(data => {
        setTodos([...data.result])
        setLoading(false)
      })
  }, [activeKey, query])
  // useEffect(() => {
  //   // 请求数据
  //   // setLoading(true)
  //   //fetchTodos ？ 参数对象来组织
  //   fetchTodos({query: 'todo', tab: 'finished'})
  //     .then((data) => {
  //       setLoading(false)
  //       // console.log(data);
  //       setTodos([...data.result])
  //     })
  // }, [])
  return (
    <>
      {/* 70%的通用业务组件， 属于框架提供 */}
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        <TabPane tab="全部" key="全部"/>
        <TabPane tab="已完成" key="已完成"/>
        <TabPane tab="未完成" key="未完成"/>
      </Tabs>
      <div className="app-wrap">
        <h1 className="app-title">Todo List</h1>
        <TodoInput placeholder={placeholder} onSetQuery={onSetQuery} />
        <Spin spinning={loading} tip="加载中~">
          {/* 业务组件， 显示任务列表 */}
          <TodoList todos={todos} onDelete={onDelete}/>
        </Spin>
      </div>
    </>
  )
}

export default App
