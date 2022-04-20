(function(){
    // console.log('立即执行');
    let a = 1;
    let ret = 0;
    let res = 0;
    ret  = add(3,-5);
    console.log(ret);
    //执行流程回到了匿名函数中?
    //栈的出栈操作
    res = a + ret;
})()
//匿名函数的出栈操作执行栈回归全局

    
function add(x,y){
    let sum = 0;
    sum = x+y;
    return sum;
}