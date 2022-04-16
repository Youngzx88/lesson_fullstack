// 从对象字面量升级
function Cat(name,color){
    this.name = name;
    this.color = color;
}
let cat1 = new Cat('大毛','黄色');
let cat2 = new Cat('二毛','黑色');
// 证明父子关系
console.log(cat1.constructor);
// 证明兄弟关系
console.log(cat1.constructor == cat2.constructor);
console.log(cat1.__proto__.constructor,cat2.__proto__.constructor);
console.log(cat1 instanceof Cat,"========");//true 从实例找原型
console.log(Cat.prototype.isPrototypeOf(cat1));//true 从原型找实例

//升级之后不用this(不能用instance of)-》还是用this好
function Dog(name,color){
    return{
        name:name,
        color:color
    }
}
let dog1 = Dog('小狗','白色');
console.log(dog1.name,dog1.color);//小狗 白色
console.log(dog1.constructor);//Object
console.log(dog1 instanceof Dog,"========");//false

// js中引入this new,不需要返回对象(call,constructor);函数更像函数