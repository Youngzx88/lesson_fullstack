// const whiteList = process.env.WHITE_LIST.split(",");
module.exports = async (ctx, next) => {
    // const origin = req.get("Origin");
    // if (origin) {
    //   const allowOrigin = whiteList.find((url) => origin.indexOf(url) !== -1);
    //   if (allowOrigin) {
    // res.header("Access-Control-Allow-Origin", origin);
    白名单 * 全部都可以访问
    ctx.set("Access-Control-Allow-Origin", '*');
    ctx.set("Access-Control-Allow-Headers", "Content-Type"); // 请求头 只允许访问Content-type
    ctx.set("Access-Control-Allow-Methods", "POST,GET,OPTIONS"); // 请求方法 只允许POST、GET
    //   }
    // }
    await next();
}