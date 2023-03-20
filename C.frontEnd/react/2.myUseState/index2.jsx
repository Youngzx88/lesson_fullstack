const app = ReactDOM.createRoot(document.querySelector('#app'));

const myReact = (() => {
  let _initState;
  function useState (initState) {
    _initState = _initState === undefined ? initState : _initState;
    function _setState (newState) {
      _initState = newState
      render()
    }
    return [_initState,_setState]
  }
  function render () {
    app.render(<App/>)
  }
  return {
    useState
  }
})()

const { useState } = myReact

function App ()  {

  const [ username, setUsername ] = useState('yzx');

  return (
    <div>
      <div style={{color:'black'}}>姓名：{username}</div>
      <button onClick={()=>{setUsername("wuhuhuh")}}>点击修改姓名</button>
    </div>
  );
};
app.render(<App/>)