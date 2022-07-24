import { useState } from "react";

export const useReducer=(reducer,initialState = {})=>{
    const [state,updateState]=useState(initialState)

    const dispatch=(action)=>{
       updateState(reducer(state,action))
    }

    return [state,dispatch]
}