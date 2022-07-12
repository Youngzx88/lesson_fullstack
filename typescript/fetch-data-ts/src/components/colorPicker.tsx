import React from "react";
import {Color} from '../model/color'

interface Props{
  color: Color,
  onColorUpdated: (Color:Color) => void;
}

interface PropsColorSlider{
  value: number,
  onValueUpdated: (newValue:number) => void;
}

const UpdateColor = (props:Props,colorId: keyof Color) => (value:any) => {
  props.onColorUpdated({
    ...props.color,
    [colorId]: value
  })
}
const ColorPicker:React.FC<Props> = (props) =>{
  // UpdateColor("red")
  return (
    <div>
        <ColorSliderComponent value={props.color.red} onValueUpdated={UpdateColor(props,"red")}/>

        <ColorSliderComponent value={props.color.green} onValueUpdated={UpdateColor(props,"green")}/>

        <ColorSliderComponent value={props.color.blue} onValueUpdated={UpdateColor(props,"blue")}/>
        {/* <input type="color" onChange={props.onColorUpdated}/> */}
    </div>
  )
}

const ColorSliderComponent:React.FC<PropsColorSlider> = (props) => {
  return  (
    <div>
      <input type="range"
          min="0"
          max="255"
          value={props.value}
          onChange={(event)=> props.onValueUpdated(+event.target.value)}/>
          {props.value}
    </div>
  )
}
export default ColorPicker