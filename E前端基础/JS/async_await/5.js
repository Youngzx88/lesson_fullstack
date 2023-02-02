//async awaite出来
//没有抛弃promise，抛弃烦人的thenable链条
function sleep(time){
    //耗时任务封装在Promise内部 resolve
    return new Promise((resolve)=>{
        setTimeout(resolve,time);
    });
}

//es7函数修饰符 说明他是一个async函数 异步的
(async function(){
    //函数内部的异步任务，如果是用promise来封装的话，可以实现同步化效果
    console.log('do something,' + new Date());
    //await右边的返回值是promise实例的话
    await sleep(3000);//await是与async一起出来的
    console.log('do something,' + new Date());
})();
// sleep(2000);