//1.这种情况是把构造函数的参数写死了
function Test() {
    this.name = 'jack';
    this.age = 18;
  }
  var a = new Test();
  console.log(a.name);
  console.log(a.age);


//手写实现new
//让实例的__proto__指向构造函数的prototype
function myNew(obj2,...args){
    //创建一个实例并指向obj2的原型
    var obj = Object.create(obj2.prototype);
    // new构造函数时要执行函数，同时指定this
    obj2.call(obj,...args);
    //
    return obj;
}
function Person(name,age){
    this.name = name;
    this.age = age;
}
var p1 = myNew(Person,'shit',19);
console.log(p1);