// node api 框架层
const Koa = require('koa')
const path = require('path')
const app = new Koa();//web server app
// 启动静态资源服务,接收一个路径参数,静态资源就可以直接访问
const staticServer = require('koa-static')
//session中间件
const koaSession = require('koa-session');


const session_signed_key = ["secret"];
app.keys = session_signed_key;
const session_config = {
  key: 'koa:sess', /**  cookie的key。 (默认是 koa:sess) */
  maxAge: 1000 * 60,   /**  session 过期时间，以毫秒ms为单位计算 。*/
  autoCommit: true, /** 自动提交到响应头。(默认是 true) */
  overwrite: true, /** 是否允许重写 。(默认是 true) */
  httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
  signed: true, /** 是否签名。(默认是 true) */
  rolling: true, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
};
const session = koaSession(session_config, app)


app.use(session);
//1. use 启用一个中间件
//2.1 静态文件路径
app.use(staticServer(path.join(__dirname,'./static')))
//2.2 动态数据
app.use(async ctx => {
  if (ctx.path == '/login') {
      // 登录？ 
      const { userName, password } = ctx.query;
      if (userName == 'test' && password == 'test') {
          ctx.session.login = {
              name: userName,
              uid: 2,
              sex: '男',
              level: 2
            }
          ctx.type = 'html'
          ctx.body = `
          登录成功
          <a href="/testlogin">去测试登录</a>
          `;
      }
  } else if (ctx.path == '/testlogin') {
      console.log(ctx.session, '/////');
      if (!ctx.session.login.name) {
          ctx.redirect('/');
      }
      else {
          ctx.body = '已经登录' + ctx.session.login.name;
      }
  }
})

app.listen(1314)
//用户要访问post/:id怎么办？
//1. 进来先运行到第10行，但是路由名并不是静态，而是动态参数，跳过这一行
//2. 继续往后面找到符合路由条件的中间件！

