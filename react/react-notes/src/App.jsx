import { useState } from 'react'
import Notes from './components/Notes'
// 只在根组件引入，避免每个组件都引入
import './index.css'
import 'semantic-ui-css/semantic.min.css' 

function App() {
  return (
    <div className="App">
        <Notes/>
    </div>
  )
}

export default App
