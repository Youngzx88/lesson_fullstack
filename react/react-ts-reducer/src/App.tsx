// import { useReducer } from 'react'
import { useReducer } from "./components/fakeReducer";
import Demo from './components/Demo';
//实现计数器
import {NewDemo,MyContextProvider} from './components/NewDemo'

function App() {
  //useReducer接收两个参数，第一个是reducer的处理函数，第二个是state的初始值

  return (  
    <div className="App">
      {/* <Demo></Demo> */}
      <MyContextProvider>
        <NewDemo></NewDemo>
      </MyContextProvider>
    </div>
  )
}

export default App