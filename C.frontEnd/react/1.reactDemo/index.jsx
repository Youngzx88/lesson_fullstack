const { useState } = React;

function App ()  {
  const [ username, setUsername ] = useState('yzx');
  const [ age, setAge ] = useState(18);
  return (
    <div>
      <div style={{color:'black'}}>姓名：{username}</div>
      <div style={{color:'black'}}>年龄：{age}</div>
      <div>???</div>
    </div>
  );
};
const app = ReactDOM.createRoot(document.querySelector('#app'));
app.render(<App/>)
// app.render(<h1>wuhu</h1>)