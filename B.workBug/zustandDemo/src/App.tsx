import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useBearStore } from './model'

function App() {
  const state = useBearStore();
  console.log("state",state)

  const handleClick = () => {
    state.changeName2();
  }
  return (
    <div className="App">
      <Profiler
        id="app"
        onRender={(
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime
        ) => {
          console.log(`Component "${id}" was rendered in phase "${phase}".`)
          console.log(`Actual time: ${actualDuration}ms`)
        }}>
        <div onClick={handleClick}>hello</div>
      </Profiler>
    </div>
  )
}

export default App
