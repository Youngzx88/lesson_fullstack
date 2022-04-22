// 实现instanceof
/*
*
*@myinstanceof 手写实现instanceof
*@params a,b
*@return boolean
*/

//与其他语言的面向对象不同,js的instanceof目的是在于判断a是否是b原型链上的一个
//a.__proto__ =  b.prototype
function Dog(){

}
function Cat(){

}
function myInstanceof(a,b){
    //得到a原型链上的所有__proto__
    let proto = Object.getPrototypeOf(a);//方法返回指定对象的原型 dog->dog.__proto__ == Dog.prototype
    while(true){
        if(!proto) return false;
        if(proto ==  b.prototype) return true;//dog.__proto__ == Dog.prototype
        proto = Object.getPrototypeOf(proto);
    }
}
const dog = new Dog();
const cat = new Cat();
console.log(myInstanceof(dog,Dog));
console.log(myInstanceof(dog,Object));
console.log(myInstanceof(dog,Cat));
