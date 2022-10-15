import React from 'react'
import {Color} from './mode/color'

interface Props{
  color: Color;
}
const ColorBrowser: React.FC<Props> = (props) =>{
  const divStyle = {
    width:"11rem",
    height:"7rem",
    background:`rgb(${props.color.red},${props.color.green},${props.color.blue})`
  }
  return (
    <div style={divStyle}>

    </div>
  )
}


export default ColorBrowser