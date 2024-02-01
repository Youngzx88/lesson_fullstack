import React, { createContext, useContext } from 'react'
export default function UseContextDemo() {

  const countContext = createContext(1)

  const Bbb = () => {
    const count = useContext(countContext)
    return (
      <div>{count}</div>
    )
  }

  const Aaa = () => {
    return (
      <div>
        <Bbb></Bbb>
      </div>
    )
  }

  return (
    <div>
      <countContext.Provider value={2}>
      <Aaa />
      </countContext.Provider>
    </div>
  )
}
