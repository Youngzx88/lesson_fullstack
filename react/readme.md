### npm: node package management

#### 1.react创建:
- npm init @vitejs/app初始化脚手架
- vitejs当前最快的脚手架
    1. 输入项目名称
    2. 确定用react
    3. 得到了一个项目模板
#### 2.下一步
- cd 项目目录
- npm i根据项目描述，把项目依赖(dependencies+devDependencies)安装
- npm run dev
#### 3.介绍项目模板
- 项目模板
    1. index.html / :3000默认
        - 挂载点 #root
        - script引入 src/main.jsx
            1. src js开发目录
            2. main.jsx入口文件
            3. 文件后缀为jsx的时候，react

#### 4.理解命令
- npm run dev 本地电脑
- npm run build 编译 打包 多一个dist目录 -》结果打包
- 上线 阿里云 买台服务器 公有IP

### 5.什么是JSX
- 可以在JS里声明的xml，html是xml的一种 ： js + xml = jsx
- xml介绍自己
<user>
    <name>杨仲鑫</name>
    <age>18</age>
    <hometown>江西</hometown>
</user>

### 6.自定义组件和jsx模板
- {}里可以存放js代码
```jsx
let name = "杨仲鑫";
//jsx模板
const element = <h1 className='young'>hello,{name}</h1>;//jsx的写法
//自定义组件
const Hello = () =>{
  return <div>hello{name}</div>
}
//root以内都生效
ReactDOM.createRoot(document.getElementById('root')).render(
    // element
    //xml
    <Hello></Hello>
)
```
### 7.useState
- main.jsx引入App从react中解构出useState
- 把变量的修改监听到setxxx,改变的时候实时渲染
### 8.export
- 一个jsx只能有一个默认export
- 需要解构的export要在jsx中直接export，不能用默认的export default
```javascript
export const yzx = '杨仲鑫';//直接往外丢需要这样export
```

### 9.style-components是使css实现模块化的
- npm install styled-components
- 全局样式
```jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    line-height: 1;
}
`
export default GlobalStyle;

```
- 在对应的组件内使用
```jsx
import  GlobalStyle from "./style.js";

ReactDOM.render(
  
    <>
      <其他组件>
      <GlobalStyle/>
    </>,
  document.getElementById('root')
);

```

### 10.数据一般在父组件声明
- 在父组件声明可以通过参数传至多个子组件，并达到数据同步的效果
```jsx
// 父组件传参数
 <Main users={users}/>
// 子组件接收参数
 const Main = ({users}) => {
  return (
    <div>
      Main
      <ul>
        {/* user.name有重名 */}
        {users.map(user => <li key={user.id}>{user.name} - {user.age}</li>)}{/*每个map需要有一个唯一的key，最好用id来表示*/}
      </ul>
    </div>
  )
}
```

### 11.useEffect
- 如果用useState
```jsx
//1.setUsers一旦发生状态变化会重新渲染整个页面，会不停重新渲染页面，执行setTimeout
setTimeout(()=>{
  //用users.push后，setUsers(users)不起作用，因为这个时候users已经是不变的了，要在setUsers里面变化才能检测
  setUsers([...users,{
      name:'李老師',
      age:10,
      id:4
    }])
},1000)
```
- Component useEffect代表onDOMContentLoaded表示组件挂载上去了
```jsx
//2.useEffect:Component useEffect代表onDOMContentLoaded表示组件挂载上去了
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
```