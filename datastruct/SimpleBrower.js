// js早期版本没有class关键字
// es6提供了，但是class只是语法糖，底层原型式面向对象并没有改变
class SimpleBrowser {
    constructor(){
        this.x = 1;
    }
    push(){

    }
}
const browser = new SimpleBrowser();
console.log(browser.__proto__.constuctor);