//如何实现异步sleep
//同步的代码放到thenable里去运行
function sleep(time){
    //耗时任务封装在Promise内部 resolve
    return new Promise((resolve)=>{
        setTimeout(resolve,time);
    });
}
//耗时任务会放到event loop里
sleep(2000)
    .then(()=>{
        console.log('-----');
        }
    )

console.log('111');