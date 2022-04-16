function Cat(name,color){
    this.name = name;
    this.color = color;
    //浪费内存
    // this.type = "猫科动物";//不会改变的属性
    // this.eat = function(){
    //     console.log('eat老鼠');
    // }
}


//这样写很浪费 交给prototype
//1. 省内存
//2. 所有实例共享prototype对象上的属性和方法
//如何区分对象本身的属性(constructor),prototype上的属性
Cat.prototype.eat =function(){
    console.log('eat 老鼠'); 
}
Cat.prototype.type = '猫科动物';


let cat1 = new Cat('Tom','黑色');
let cat2 = new Cat('小黑','灰色');

console.log(cat1.hasOwnProperty('name'),cat1.hasOwnProperty('type'));//true false
//首先到ownProperties去查找，找不到再去原型上去查找
//js 什么语法来实现的呢?__protot__只要在原型对象上，也可以直接调用

console.log(cat2.type);//猫科动物
//Object的原型链
console.log(cat2.toString());

