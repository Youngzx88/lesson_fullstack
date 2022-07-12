import { useState } from 'react'
import ColorPicker from './components/colorPicker'
import {Color} from './model/color'
import ColorBrowser from './components/colorBrowser'
import SideBarComponent from './components/SideBarComponent'
import MemberTableComponent from './components/membertable'

function App() {
  // 类型参数,限制useState
  const [color,setColor] = useState<Color>({
    red:225,
    green:114,
    blue:111
  })
  const [isVisible,setisVisible] = useState(false)

  return (
    <div>
      <div className="App">
        <ColorBrowser color={color}></ColorBrowser>
        <ColorPicker 
          color={color} 
          onColorUpdated={setColor}/>
      </div>
      <div style={{float:"left"}}>
        <button onClick={()=>setisVisible(!isVisible)}>Toggle Sidebar</button>
      </div>
      <SideBarComponent isVisible={isVisible}>
          <h1>Cool Scfi movies</h1>
          <ul>
            <li><a href="#">Interstellar</a></li>
            <li><a href="#">Blade Runner</a></li>
            <li><a href="#">a space odyssey</a></li>
          </ul>
      </SideBarComponent>
      <MemberTableComponent></MemberTableComponent>
    </div>
  )
}

export default App
