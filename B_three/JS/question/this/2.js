//es6可以给函数默认值
//function Person(name="未命名",age)
function Person( name,age) {
    this.name = name || '未命名';
    this.age = age;
}
//面向对象里,类的静态属性 static
Person.count = 0;//类，构造函数的
Person.species = '人类';
Person.prototype = {    
    num: 1
}
let sm = new Person( );
console. log( sm.num)
//访问类的静态属性
console.log(Person.species);