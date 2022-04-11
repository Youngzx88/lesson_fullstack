//传递多个参数 function sayHi(...args)
function sayHi(x,y){
    //this指向
    //严格模式:this->undefined
    //非严格模式:看宿主环境 window||global

    //函数里有call auguments[]
    console.log(x,y);
    console.log('hello',this.name);
}

let yzx = {
    name:'Youngzx'
}
sayHi.call(yzx,1,2,3);//让普通函数运行,但是指定this指向,第一个参数指定this,其余参数交给函数本身作为参数



function sayHi2(...args){
    console.log(args);
}
//call是一个参数一个参数的传 apply是传一个数组
// sayHi2(100,200,300);
sayHi2.apply(yzx,[1,2,3]);