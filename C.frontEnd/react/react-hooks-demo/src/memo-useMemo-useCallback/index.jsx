import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'

const  ChildrenComponent = memo(({ count,callBack,memoNum }) => {
  console.log("🚀 ~ ChildrenComponent ~ callBack:", callBack)
  return <div onClick={()=>callBack()}>{count}-{memoNum}</div>
})


export default function MemoHooks() {
  const [num,setNum] = useState(0)
  // useEffect(() => {
    // setInterval(() => {
    //   setNum(Math.random())
    // }, 2000)
  // }, [])

  const callBack = useCallback(() => {
    setNum(30)
  },[])

  const memoNum = useMemo(()=>{
    return num + 2 * 200 / 3
  },num)
  return (
    <div>
      <ChildrenComponent count={num} memoNum={memoNum} callBack={callBack}></ChildrenComponent>
    </div>
  )
}
