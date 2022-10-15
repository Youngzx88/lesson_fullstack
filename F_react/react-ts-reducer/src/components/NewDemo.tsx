import React from 'react'

interface UserContext {
  username: string;
  setUsername:(value:string)=> void;
}

const MyContext = React.createContext<UserContext>({
  username: "",
  setUsername: (value)=>{}
});

export const MyContextProvide  = (props:any) =>{
  const [username,setUsername] = React.useState("john Doe");
  
  return (
    <MyContext.Provider value={{username,setUsername}}>
      {props.children}
    </MyContext.Provider>
  )
}

const NewDemo = () => {
  return (
    <div>
      
    </div>
  )
}

export default NewDemo
