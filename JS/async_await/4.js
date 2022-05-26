//发现promise异步同步化的缺点

function f1(){
    return new Promise((resolve)=>{
        console.log('f1');
        setTimeout(resolve,2000);
    })
}
function f2(){
    return new Promise((resolve)=>{
        console.log('f2');
        setTimeout(resolve,2000);
    })
}
function f3(){
    return new Promise((resolve)=>{
        console.log('f3');
        setTimeout(resolve,2000);
    })
}
//异步任务很多的时候，回调是通过回调函数，promise是通过链式调用(繁琐)
f1().
    then(()=>{
        //返回一个新的promise实例，继续thens下去
        return f2();
    }).
        then(()=>{
            return f3();
        })