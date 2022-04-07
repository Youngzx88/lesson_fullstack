// 传统的面向对象 vs {对象字面量}
//es5 后期提供的
class Cat{
    //构造器
    constructor(name){
        this.name=name;
    }
    //方法
    makeSound(){
        console.log('喵')
    }
}
const xm = new Cat('小黑');
xm.makeSound();