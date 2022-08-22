import React,{useReducer, useRef} from 'react'
import useState from 'react';

interface userState{
  name:String;
  lastname:String;
}

interface Action{
  type:String;
  data:any
}

const actionIds = {
  setName: "setname",
  setLastname: 'setLastName'
}

interface Props { 
  name: String,
  dispatch: React.Dispatch<Action>
}


const EditUsername: React.FC<Props> = React.memo((props) =>{
  return (
    <input
      value={props.name}
      onChange={(e) => 
          {props.dispatch({type:actionIds.setName,
                          data: e.target.value})}}  
    />
  )
})

const userInfoReducer = (state:userState,action:Action) => {
  switch(action.type){
    case actionIds.setName:
      return{
        ...state,
        name:action.data
      }
    case actionIds.setLastname:
      return{
        ...state,
        name:action.data
      }
    default:
      return state;
  }
}
const Demo = () => {
  const [userInfo,dispatch] = useReducer(userInfoReducer,{
    name: "john",
    lastname: 'Doe',
  })
  return (
    <div>
      <h3>
        {userInfo.name}-{userInfo.lastname}
        <input type="text" onChange={(e)=>{dispatch({type:actionIds.setName,data:e.target.value})}}/>
      </h3>
    </div>
  )
}

export default Demo
