//  js-> es5(jquey)->es6+(现代js react，babel)
// promise -> es7 async await
// async await es7透明化

// promise是es6提供的异步同步化方案 then()
// es7还要提供新方案？因为then有不完美的地方，同理回调也有不完美的地方(回调地狱)


//1.回调(异步任务同步化)
//回调可读性不太好
function  f1(cb) {
    console.log('f1---------')
    setTimeout(function() {
        cb();
    }, 1000)
}
function  f2(cb) {
    console.log('f2---------')
    setTimeout(function() {
        cb();
    }, 2000)
}

function f3() {
    console.log('f3---------')
}
f1(function(){
    f2(function(){
        f3()
    })
});