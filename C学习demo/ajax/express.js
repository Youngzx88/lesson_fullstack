//1.引入express
const express = require('express')
//2.创建应用对象
const app = express();
//3.创建路由规则
// request是对请求报文的封装
// response是对相应报文的封装

// app.get('/',(request,response) => {
//   response.send("hello express")
// })

app.get('/server',(request,response) => {
  // 设置响应头 跨域问题
  response.setHeader('Access-Control-Allow-Origin',"*")
  // 设置响应体
  response.send("hello ajax")
})

app.post('/server',(request,response) => {
  // 设置响应头 跨域问题
  response.setHeader('Access-Control-Allow-Origin',"*")
  // 设置响应体
  response.send("hello ajax post")
})

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

app.all('/axios-server',(request,response) => {
  // 设置响应头 跨域问题
  response.setHeader('Access-Control-Allow-Origin',"*")
  response.setHeader('Access-Control-Allow-Headers',"*")

  // 响应json数据
  const data = {
    name: 'Youngzx'
  }
  let formData = JSON.stringify(data);
  response.send(formData)
})

//4.监听端口的启动服务  
app.listen(8000,()=>{
  console.log("服务器已启动，8000端口监听中 ")
})