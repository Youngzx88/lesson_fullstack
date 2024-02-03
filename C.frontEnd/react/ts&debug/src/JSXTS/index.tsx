import React, { CSSProperties, FunctionComponent, MouseEventHandler } from 'react'

interface PropsType {
  title: string;
  content: React.ReactNode;
}

function Add(props:PropsType):React.ReactNode {
  return (<div>
    <h1>{props.title}</h1>
      {props.content}
  </div>)
}

const Add2:React.FunctionComponent<PropsType> = (props:PropsType) => {
  return (<div>
    <h1>{props.title}</h1>
      {props.content}
  </div>)
}

interface CccProps {
  clickHandler: MouseEventHandler
  style: CSSProperties
} 

function Ccc(props: CccProps) {
  return <div onClick={props.clickHandler} >ccc</div>
}

export default function index() {
  return (
    <>
      <Add title='你好' content={<button>按下</button>}></Add>
      <Add title='好ni' content={null}></Add>
      <Add2 title='Add2' content={null}></Add2>
      <Ccc style={{background:'red'}} clickHandler={(e) => {console.log(e)}}></Ccc>
    </>
  )
}
