function add (a,b,c){
    return a+b+c;
}
//三个参数每次只能给一个？
// add(1)(2)(3)

//函数的柯里化：函数柯里化的两个特点：提前返回和延迟执行。
function curry(fn){
    //函数嵌套函数，内部函数会被返回到外部，并得以执行
    //fn等在闭包空间里的永生变量在被闭包函数声明时已经存在
    let judge = (...args) =>{
        if(args.length == fn.length) return fn(...args)
        return (...arg) => judge(...args,...arg);
    }
    return judge;
}
//得到被闭包函数


let addCurry = curry(add); 
//执行函数
console.log(addCurry(1)(2)(4));
//addCurry(1)  