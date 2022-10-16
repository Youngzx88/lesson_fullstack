# Ajax-Note
## 1、了解一些计网的知识
- 请求头
- 响应头
- 响应体
## 2、express框架模拟后端接口
```js
//1.引入express
const express = require('express')
//2.创建应用对象
const app = express();
//3.创建路由规则
// request是对请求报文的封装
// response是对相应报文的封装

app.get('/',(request,response) => {
  response.send("hello express")
})

app.get('/server',(request,response) => {
  // 设置响应头 跨域问题
  response.setHeader('Access-Control-Allow-Origin',"*")
  // 设置响应体
  response.send("hello ajax")
})

//4.监听端口的启动服务  
app.listen(8000,()=>{
  console.log("服务器已启动，8000端口监听中 ")
})
```
## 3、ajax原生写法
```html
  <style>
    #box{
      width: 300px;
      height: 300px;
      border: 1px solid green;
    }
  </style>
</head>
<body>
    <button>点击发送请求</button>
    <div id="box"></div>
    <script>
      //获取btn
      const btn = document.getElementsByTagName('button')[0];
      const response = document.getElementById('box')
      //绑定事件
      btn.onclick = function() {
        //1.创建xhr对象
        const xhr = new XMLHttpRequest();
        //2.初始化 设置请求方法 和 url
        xhr.open('GET','http://localhost:8000/server');
        //3.发送请求
        xhr.send();
        //4.得到响应内容
        xhr.onreadystatechange = function(){
          //判断服务器返回的状态/结果
          if(xhr.readyState === 4){
            // console.log(xhr.status)
            // console.log(xhr.statusText)
            // console.log(xhr.getAllResponseHeaders())//所有响应头m
            // console.log(xhr.status >= 200 && xhr.status < 300)
            if(xhr.status >= 200 && xhr.status < 300){
              response.innerHTML = xhr.response
            }else{
              console.log("错误")
            }
          }
        }
      }
    </script>
</body> 
</html>
```
## 4、Ajax设置请求参数/发送post请求
- 按如下所示设置，在queryStringParaParameters中得到参数
```js
 xhr.open('GET','http://localhost:8000/server?a=100&b=200&c=300');
```
- 发送post请求
```js
app.post('/server',(request,response) => {
  // 设置响应头 跨域问题
  response.setHeader('Access-Control-Allow-Origin',"*")
  // 设置响应体
  response.send("hello ajax post")
})
```
## 5、post设置请求体/设置请求头
- 设置请求体，在payload中可以看到
```js
xhr.send('a=100&b=200&c=300');
```
- 设置请求体内容
```js
//content-type设置请求体类型
 xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
```
## 6、ajax请求服务器端响应json
- 服务端返回json
```js
app.get('/json-server',(request,response) => {
  // 设置响应头 跨域问题
  response.setHeader('Access-Control-Allow-Origin',"*")
  // 响应json数据
  const data = {
    name: 'Youngzx'
  }
  let formData = JSON.stringify(data);
  response.send(formData )
})
```
- 前端解析json
  - 在响应体中找到对应的数据
  - 设置响应体为'json'
```js
 const result = document.getElementById('result')
      window.onkeydown = function() {
        const xhr = new XMLHttpRequest();
        //设置响应体格式，省去自己解构这一步
        xhr.responseType = 'json'
        xhr.open('GET','http://localhost:8000/json-server');
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
        xhr.send();
        xhr.onreadystatechange = function(){
          //判断服务器返回的状态/结果
          if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){
              // 手动对json数据转换
              // let data = JSON.parse(xhr.response)
              // result.innerHTML = data.name
              result.innerHTML = xhr.response.name
            }else{
              console.log("错误")
            }
          }
        }
      } 
```
## 7、nodeman自动重启node环境
