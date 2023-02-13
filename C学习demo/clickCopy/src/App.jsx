import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import copy from 'copy-to-clipboard';
function App() {
  const [count, setCount] = useState(0)

  const coppyUrl = (url) =>{
    copy(url);
    alert('复制成功');
  };
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=>coppyUrl('需要复制的内容2222在这里')}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
