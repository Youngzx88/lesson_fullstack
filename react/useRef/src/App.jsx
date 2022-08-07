import { useState,useRef, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const r = useRef(0);
  const [n, setN] = useState(0);
  useEffect(() => {
    r.current += 1;
    // if (r.current > 1) {
    //   console.log("r.current:" + r.current);
    // }
  },[n]);
  return (
    <div className="App">
      <h1 style={{display:"none"}}>n:{n}</h1>
      <h1>r.current{r.current}</h1>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        {" "}
        +1
      </button>
    </div>
  );
}

export default App
