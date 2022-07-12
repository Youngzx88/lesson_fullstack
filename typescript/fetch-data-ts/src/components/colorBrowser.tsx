import React from "react";
import {Color} from '../model/color'

interface Props{
  color:Color
}

const ColorBrowser:React.FC<Props> = (props) =>{
  // 约定为CSS属性  
  const divStyle: React.CSSProperties ={
    width: "11rem",
    height: "11rem",
    backgroundColor: `rgb(${props.color.red},${props.color.green},${props.color.blue})`
  }
  return (
    <div style={divStyle}></div>
  )
}
export default ColorBrowser