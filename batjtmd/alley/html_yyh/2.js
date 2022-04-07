//当函数名大写,构造函数(函数就可以构建一个类)
//js早期没有class关键字,但是并不影响做java的传统面向对象编程
//在js里面函数是一等对象,可以用来构造对象,其实没有类
function Cat(name){
    //给一组对象添加属性，不建议这么写
    this.name=name;
    // this.makeSound = function(){
    //     console.log('喵');
    // }
}

//对象的构造函数,构造对象的函数(函数也是对象)
//js函数对象有prototype属性
Cat.prototype.makeSound = function(){
    console.log("喵喵喵");
}
//不能被调用,因为不是原型上公有的方法
    // Cat.sayhi = function(){
    //     console.log("喵喵喵");
    // }

//同一组对象 有共同的类方法、属性模板
var xm = new Cat('小黑');
xm.makeSound();
// xm.sayhi();

var xh = new Cat('小花');
console.log(xm===xh);
//判断两个对象是兄弟
console.log(xm.constructor==xh.constructor);
//如何判断对象是某类的实例
console.log(xm instanceof Cat);

//Object对象即是对象又是函数
let a = { } ;//对象字面量的构造函数Object()
let obj = new Object();//对象字面量
console.log(obj instanceof Object);
console.log(typeof Object);