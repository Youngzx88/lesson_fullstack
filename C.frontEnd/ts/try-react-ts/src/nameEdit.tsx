import React,{useState} from 'react';

//父子间更复杂
interface Props {
  initialUserName: string
  editingName:string
  onNameUpdated:()=>any
  onEditingNameUpdated:(newEditingName: string)=>any
  disabled: boolean
}

const NameEditComponent:React.FC<Props> = (props) =>{
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    props.onEditingNameUpdated(e.target.value)
  }
  const onNameSubmit = () => {
    props.onNameUpdated()
  }
  
  return (
    <>
      <label htmlFor="">updated name:</label>
      <input value={props.editingName} type="text" onChange={onChange}/>
      <button onClick={onNameSubmit} disabled={props.disabled}>Change</button>
    </>
  )
}

export default NameEditComponent