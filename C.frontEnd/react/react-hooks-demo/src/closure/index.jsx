import React, { useEffect, useRef, useState } from 'react'

const useInterval = (func,time) => {
  const ref = useRef(func)

  ref.current = func

  useEffect(()=>{
    const timer = setInterval(()=>{ref.current()},time)
    return ()=>{clearInterval(timer)}
  })
}
export default function Closure() {
  const [count,setCount] = useState(0)

  const updateCount = () => {
    setCount(count+1)
  }

  useInterval(updateCount,2000)
  return (
    <div>{count}</div>
  )
}
