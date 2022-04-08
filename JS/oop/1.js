function Dog(name){
    this.name=name;
};

Dog.prototype.makeSound = function(){
    console.log(`${this.name}:汪汪汪`);
}
const xh = new Dog("小黑");
xh.makeSound();


//实例原型
console.log(Dog.prototype);//{ makeSound: [Function (anonymous)] }得到原型上的方法
//实例原型-》构造函数(构造函数也可以通过prototype走回实例原型)
console.log(Dog.prototype.constructor);//[Function: Function]
//实例-》实例原型
console.log(xh.__proto__);//{ makeSound: [Function (anonymous)] }
//实例原型-》Object.prototype
console.log(Dog.prototype.__proto__);//[Object: null prototype] {}