import { useState } from 'react'
import ColorPicker from './components/colorPicker'
import {Color} from './model/color'
import ColorBrowser from './components/colorBrowser'
function App() {
  // 类型参数,限制useState
  const [color,setColor] = useState<Color>({
    red:225,
    green:30,
    blue:40
  })
  return (
    <div className="App">
      <ColorBrowser color={color}></ColorBrowser>
      <ColorPicker 
        color={color} 
        onColorUpdated={setColor}/>
    </div>
  )
}

export default App
