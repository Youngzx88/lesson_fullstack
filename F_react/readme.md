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
// 子组件接收参数 在参数中解构出users
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

### 11.useState
- useState常用于更新组件
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
### 11.useEffect
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

### 12.axios
- 使用axios替代fetch
- 一般封装在api文件夹中，方便管理数据源与数据接口
```jsx
(async function(){
        const data = await axios.get('https://www.fastmock.site/mock/f9755e3a584fdb2f805495e4308be03d/beers/list')
        setBeers(data.data.beers);
        setLoading(false);
})() 
```

### 13.Lokijs
```js
import Loki from 'lokijs'

// 增删改查
//1. 建数据库 notes数据库    
//2. 建数据库 连接数据库 db代表着数据库对象
//3. 建个表/打开表
//4. CRUD操作

//1. 建库（库的默认配置）
export const db = new Loki('notes',{
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval:3000,
    persistenceMethod:'localStorage'
})
//2. 初始化库（建一个表）
function databaseInitialize(){
    //数据库初始化
    const notes = db.getCollection('notes')//数据库
    if(notes === null){
        db.addCollection('notes')//创建一个表
    }
}

//3. select 加载一个集合(表) 供其他模块调用 参数是表名
export function loadCollection(collection){
    return new Promise(resolve =>{//查询需要时间，用异步封装
        db.loadDatabase({},()=>{
            const _collection = db.getCollection(collection)//getcollection就是查
                || db.addCollection(collection)
            resolve(_collection);
        })
    })
}
```

### 14.动态类名
- 多个类名引入classnames
```jsx
const ContestTab = () =>{
    const [tab, setTab] = useState('all');
    const [loading, setLoading] = useState(true)
    const changeTab = (tab)=>{
        setTab(tab)
    }
    return (
        <ContestTabWrapper>
            <a href="#" className={tab == 'all'?'current':''}  onClick={changeTab.bind(null, 'all')}>全部</a>
            <a href="#" className={tab == 'dj'? 'current':''} onClick={changeTab.bind(null, 'dj')}>电竞赛事</a>
            <a href="#" className={tab == 'sport'?'current':''} onClick={changeTab.bind(null, 'sport')}>体育赛事</a>
        </ContestTabWrapper>
    )
}
```
- 根据路径生成动态类名
```jsx
  const {pathname} = useLocation()
    <Link to="/home" className={(classnames({active:pathname=='/home'}))}>
      <i className='fa fa-home'></i>
      <span>首页</span>
    </Link>
    <Link to="/find" className={(classnames({active:pathname=='/find'}))}>
      <i className='fa fa-podcast'></i>
      <span>发现</span>
    </Link>
```
### 15.实现input双向绑定
- 正常写input无法写入
- 绑定一个onChange函数并用useState动态的修改其内容的值
```jsx
  const [inputvalue,setInputvalue] = useState('')
  return (
    <div className="App">
         <input value={inputvalue} onChange={(e) => setInputvalue(e.target.value)}/>
    </div>
  )
```
- 或者用bind，当点击时，函数才会调用
  ```jsx
  onChange={onCheckedChange.bind(null,item)}
  ```

  ### 16.严格校验参数prop-types
  - 不用给组件参数传默认值
    ```jsx
    export default function Banners({banners=[]}) 
    ```
  - prop-types
    ```jsx
    Banners:propTypes = {
      banners:propTypes.array.isRequired
    }
    ```

  ### 17.幻灯片插件
  - npm install swiper@4.5.0