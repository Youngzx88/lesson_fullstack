// 写后端代码，稳定与性能为主 服务器node 版本更新没那么快
// 使用滞后的commonjs 模块化
// 随着前端发展壮大，前端拥有了自己的模块化工具webpack vitejs 等，发展比后端快 ES6 模块化
// babel --转成--> 前端import
// const http = require('http') // commonJS 
import http from 'http'
//js单线程，web服务是天生多线程（http.creatserver不是同步代码）
const server = http.createServer(
    (req, res) => {
        if(req.url == '/about'){
            res.end('about us')
            return
        }
        res.setHeader('Set-Cookie',['type=ninja','language=javascript'])
        res.end('hello world!')
    }
)

server.listen(3000);