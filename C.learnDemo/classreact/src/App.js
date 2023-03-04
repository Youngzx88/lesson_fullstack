import './App.css';
import React from 'react'
import NewComponent from './NewComponent';
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:new Date(),
      visible:true
    }
    //class 的方法默认不会绑定 this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，
    //当你调用这个函数的时候 this 的值为 undefined。
    this.changContent = this.changContent.bind(this);
  }
  // dom挂载时
  componentDidMount(){
    this.timerId = setInterval(()=>{
      this.tick()
    },1000)
  }
  // dom卸载时
  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  // tick函数修改state状态，state变化后更新组件
  tick() {
    this.setState({
      data:new Date()
    })
  }
  changContent() {
    this.setState(state=>({
      visible : !state.visible
    }))
  }
  render() {
    return (
      <div>
      <h1>Hello World</h1>
      <h2>It is {this.state.data.toLocaleTimeString()}</h2>
      <button onClick={this.changContent}>
        {this.state.visible ? 'on' : 'off'}
      </button>
      </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <Clock></Clock>
      {/* <NewComponent data={this.state.data}></NewComponent> */}

    </div>
  );
}

export default App;
