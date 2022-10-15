import { useState } from 'react'
////定义全局样式，并以组件的方式返回
import { GlobalStyle,Tab,TabItem } from './style'//模块化开发,{}内部是其他出口，Obj是默认出口
// console.log(GlobalStyle)
// console.log(Obj)
// console.log(yzx)
function App() {
// 组件化思想，不以html思维去看待，页面一个功能块，作为一个组件来看待
  return (
    <div className="App">
        <GlobalStyle></GlobalStyle>
        <Tab>
          <a className='selected'>
            <TabItem>
              <span>推荐</span>
            </TabItem>
          </a>
          <a>
            <TabItem>
              <span>歌手</span>
            </TabItem>
          </a>
          <a>
            <TabItem>
              <span>排行榜</span>
            </TabItem>
          </a>
        </Tab>
    </div>
  )
}

export default App
