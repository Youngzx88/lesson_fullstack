import { useState } from 'react'
import Modal from './components/common/modal'


function App() {
  const [visible,setVisible] = useState(false)
  const onModalClose = ()=>{
    console.log('modal closed')
    setVisible(false)
  }
  const onModalConfirm = () =>{
    console.log('modal confirm')
    setVisible(false)
  }
  return (
    <div className="App">
      <Modal 
        visible={visible}
        title="登陆"
        onClose ={onModalClose}
        onConfirm = {onModalConfirm}
        >
          <div>
            <h3>这里是自定义内容文本区域</h3>
          </div>
      </Modal>
      <button onClick={()=>setVisible(true)}>click here</button>
    </div>
  )
}

export default App
