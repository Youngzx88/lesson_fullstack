const app = ReactDOM.createRoot(document.querySelector('#app'));

// 需要返回特定的 a
// 需要修改特定的 a
const myReact = (() => {
  // 需要定义两个数组来保存不同的状态和修改状态函数
  let _initState = [];
  let _stateSetters = [];
  // 还需要定义一个下标来记录是哪一个状态
  let stateIndex = 0
  
  function createState (initState,index){
    _initState[index] = _initState[index] ? _initState[index] : initState
  }

  function createSetState (index) {
    return function (newState){
      _initState[index] = newState
      render()
    }
  }

  function useState (initState) {
    // 定义对应的initState
    createState(initState,stateIndex)
    // 定义对应的stateSetters
    _stateSetters.push(createSetState(stateIndex))
    stateIndex ++;
    // 返回state & setState
    return [_initState[stateIndex-1],_stateSetters[stateIndex-1]]
  }

  function render () {
    stateIndex = 0;
    app.render(<App></App>)
  }

  return {
    useState
  }
})()

const { useState } = myReact

function App ()  {

  const [ username, setUsername ] = useState('yzx');
  const [ age, setAge ] = useState(18);

  return (
    <div>
      <div style={{color:'black'}}>姓名：{username}</div>
      <div style={{color:'black'}}>年龄：{age}</div>
      <button onClick={()=>{setUsername("zwtt")}}>点击修改姓名</button>
      <button onClick={()=>{setAge(20)}}>点击修改年龄</button>
    </div>
  );
};
app.render(<App/>)