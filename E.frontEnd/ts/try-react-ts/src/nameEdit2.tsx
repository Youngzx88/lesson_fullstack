import * as React from 'react'

interface Props{
  userName:string
  onNameUpdated: (Newname:string)=> void
}
const  nameEditComponent2:React.FC<Props>= (props) => {
  const [editingName,setEditingName] = React.useState(props.userName)
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setEditingName(e.target.value)
  }
  const onNameSubmit = (e:any) =>{
    props.onNameUpdated(editingName)
  }
  return (
    <div>
        {/* vscode是用ts写出来的 */}
        {props.userName}
        <input value={editingName} onChange={onChange}/>
        <button onClick={onNameSubmit}>change</button>
    </div>
  )
}
export default nameEditComponent2

