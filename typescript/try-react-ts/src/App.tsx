import React,{useState} from "react";
import { Color } from "./mode/color";
import ColorBrowser from './ColorBrowser'

// 跟组件没有特别的需求的话，不加React.FC
const App = () =>{
  const [color,setColor] = useState<Color>({
    red:200,
    green:30,
    blue:180
  })
  return (
    <>
      <ColorBrowser color={color}></ColorBrowser>
    </>
  )
}

export default App