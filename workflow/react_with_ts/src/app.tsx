import React from 'react'
import './app.css'

// 类型约束: React.FC<{}>  FC:function components函数式组件
export const App: React.FC<{}> = () => {
  return (
    <div className='app'>
      App
    </div>
  )
}
