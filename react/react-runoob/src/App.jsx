// 解构React Hooks
import React,{useState} from "react";
// 声明一个App,一个函数返回一段jsx
const App = () => {
    // useState给当前组件添加一个状态,返回一个数组
    // 放到setxxx里面可以实时改变
    let [name,setName] = useState('杨仲鑫');
    let [date,setDate] = useState(new Date().toLocaleTimeString());
    setInterval(()=>{
        setDate(new Date().toLocaleTimeString());
    },1000);
    const changeName = ()=>{
      setName('wuhu')
    }
    const friends = [{
      name:'杨仲鑫',
      age:'18'
    },{
      name:'朱文涛',
      age:'16'
    }]
    return(
      <div>
        <h1>hello {name}</h1>
        <h2>现在时间是 {date}</h2>
        <ul>
          {
            friends.map((friend,index) => <li key={index}>{friend.name} - {friend.age}</li>)
          }
        </ul>
        <button onClick={changeName}>显示英文名</button>
      </div>
    )
}
export default App