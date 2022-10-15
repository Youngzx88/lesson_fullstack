import React,{ useState,useEffect } from 'react'
// jsx对象 React.createElement('div,{className:'hello},React.createElement('h1',null.'hello World))
const Hello = <div className='hello'>Hello World!</div>
// console.log(Object.prototype.toString.call(Hello));//{};object Object
//1.JSX优秀且简单的UI表达创新
//2.JSX->babel->转义成为React.createElement()
//Index 
const Index = () =>{
  // 不是用useState,数据绑定,且响应
  // 使用useState
  // state自有的，父组件，一般不在子组件声明，保证在子组件数据的同步
  const [users,setUsers]= useState([{
      name: '杨仲鑫',
      age: 18,
      id:1
    },{
      name: '许幽泉',
      age:18,
      id:2
    }
  ])
  //生命周期函数 onload onDOMContentLoaded
  //Component useEffect代表onDOMContentLoaded表示组件挂载上去了
  useEffect(()=>{
    // console.log('组件加载好了');
    setTimeout(()=>{
      setUsers([...users,{
        name:'李老師',
        age:10,
        id:4
      }])
    },2000)
  },[])

  // 为什么会一直增加？
  // setTimeout(()=>{
  //   //用users.push后，setUsers(users)不起作用，因为这个时候users已经是不变的了，要在setUsers里面变化才能检测
  //   setUsers([...users,{
  //       name:'李老師',
  //       age:10,
  //       id:4
  //     }])
  // },1000)

    return (
      // 如果唯一的父元素，只起到包裹作用，而不需要标签，可以省略他
      <>
          <Header/>
          <Main users={users}/>
          <Footer count={users.length}/>
      </>
    )
} 
const Header = () =>{
  return (
    <div>
      <Title title="首页"/>
    </div>
  )
}
const Title = (props) =>{
  const {title} = props;
  return (
    <header>
      {props.title}
    </header>
  )
}
const Main = ({users}) => {
  return (
    <div>
      Main
      <ul>
        {/* user.name有重名 */}
        {users.map(user => <li key={user.id}>{user.name} - {user.age}</li>)}
      </ul>
    </div>
  )
}
const Footer = ({count}) =>{
  return (
    <footer>
      Footer,有{count}位用户
    </footer>
  )
}
function App() {
  // return <Hello/>//Hello是一个函数，返回的jsx
  // return React.createElement('div',null,"hello world")
  
  return (<Index/>)
}
export default App