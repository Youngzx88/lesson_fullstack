// api后端服务的单点入口文件 src/main.tsx
const Koa = require('koa'); // http server 
const router = require('koa-router')(); // koa 路由中间件 BrowserRouter
const cors = require('koa-cors')
const app = new Koa();
const {
    fetchSuggest
} = require('./api')
// const crossDomain = require('./middleware/cross-domain') // 支持跨域

// /videos get     [{}]
router.get('/getVideos', ctx => {
    const videos = [{
        id: 1,
        name: '死缓就是缓一缓再死吗？为什么要有死缓？',
        pic: 'https://www.bilibili.com/video/BV1nt4y1p78J?spm_id_from=333.851.b_7265636f6d6d656e64.1'
    }, {
        id: 2,
        name: '死缓就是缓一缓再死吗？为什么要有死缓？',
        pic: 'https://www.bilibili.com/video/BV1nt4y1p78J?spm_id_from=333.851.b_7265636f6d6d656e64.1'
    }, {
        id: 3,
        name: '死缓就是缓一缓再死吗？为什么要有死缓？',
        pic: 'https://www.bilibili.com/video/BV1nt4y1p78J?spm_id_from=333.851.b_7265636f6d6d656e64.1'
    }];
    ctx.body = videos
})

router.get('/banners', ctx => {
    const banners = [{
    }];
    ctx.body = banners;
})
// 添加了一个路由中间件 
// 上下文对象 =  req + res 
router.get("/search/suggest", async (ctx, next) => {
    // ctx.query  请求对象中的查询参数 
    // ?a=1&b=2 查询参数  设置成{a:1, b:2}
    const w = encodeURI(ctx.query.w); // 编码？ 
    // ctx.body = w
    // console.log(w, '------------')

    try{
        const data = await fetchSuggest(w);
        console.log(data);
    //     let resData = {
    //         code: "1",
    //         msg: "success"
    //     }
    //     if (data.code === 0) {
    //         resData.data = data.result;
    //     } else {
    //         resData.code = "0";
    //         resData.msg = "fail";
    //     }
    //     // ctx.set('content-type', 'json');
    //     ctx.body = resData
    } catch(e) {
        //处理错误？ 
        next(e)
    } 
})

app.use(cors())
// app.use(crossDomain)
app.use(router.routes())
// ctx = req 用户请求 + 中间件{n}   +  res响应结果 
// 中间件函数 

app.use((ctx) => {
    ctx.body = 'hello world' 
})

app.listen(3300);