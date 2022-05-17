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
