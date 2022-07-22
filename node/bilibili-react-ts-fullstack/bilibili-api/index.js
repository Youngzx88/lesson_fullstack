//api后端服务的单点入口文件 src/main.tsx
const Koa = require('koa');//http server
const { createContext } = require('vm')

const app = new Koa();

app.use((ctx)=>{
    ctx.body="shit"
})

app.listen(3300)