//es5
const func =function (a){
    return a;
}


'use strict';
//当我们是箭头函数的时候,普通函数调用this又有新方案
const func2 = (a) =>{
    //箭头函数没有this,打印出来的this通过作用域链查找到外部的this
    console.log(this);
    return a;
}
func2(1);//{}

const func3 = () =>{

}
let o = new func3();//报错：不是一个构造函数