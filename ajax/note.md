## 1. 了解一些计网的知识
- 请求头
- 响应头
- 响应体
## 2. express框架模拟后端接口
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
## 3.ajax原生写法
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
            // console.log(xhr.getAllResponseHeaders())//所有响应头
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