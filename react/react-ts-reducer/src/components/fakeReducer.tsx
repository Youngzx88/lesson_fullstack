import { useState } from "react"
export const useReducer = (reducer:any,initState = {}) =>{
  const [state,updateState] = useState(initState)

  const dispatch = (action:any) => {
    updateState(reducer(state,action))
  }
  return [state,dispatch]
}