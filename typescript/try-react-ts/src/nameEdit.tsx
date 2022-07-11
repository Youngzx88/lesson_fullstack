import * as React from 'react'

interface Props{
  userName:string
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
}
const  nameEditComponent:React.FC<Props>= (props) => {
  return (
    <div>
        {/* vscode是用ts写出来的 */}
        {props.userName}
        <input value={props.userName} onChange={props.onChange}/>
    </div>
  )
}
export default nameEditComponent

