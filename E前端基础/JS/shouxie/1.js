function Dog(){//构造函数

}
Dog.prototype.sayHi = function(){

}
const dog = new Dog();
console.log(dog instanceof Dog)//true
console.log(dog instanceof Object)//true