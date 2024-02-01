import React, { Reducer, useEffect, useReducer } from 'react'

interface Data {
  result:number
}

interface Action {
  type: 'add' | 'minus'
  num: number
}

function reducer(state: Data, action: Action):Data {

  switch(action.type) {
      case 'add':
          return {
              result: state.result + action.num
          }
      case 'minus': 
          return {
              result: state.result - action.num
          }
      default:
          return state
  }
}
export default function UseReducerDemo() {
  const [res,disapatch] = useReducer<Reducer<Data,Action>>(reducer,{result: 0})

  useEffect(()=>{
    setTimeout(() => {
      disapatch({type:'add',num:10})
    }, 1000);
  },[])
  return (
    <div>{res.result}</div>
  )
}
