// //构造函数以大写为规范
// function Teacher(){
//   this.name = '顶真';
//   this.sex = '男';
//   this.smoke = function () {
//     console.log(this.name+",性别:",this.sex,"在抽烟");
//   }
// }

// var zhangSan = new Teacher()
// zhangSan.name = "zhangSan";
// zhangSan.smoke()

// // 构造函数的正确使用方式
// function Teacher2 (opt){
//   this.name = opt.name;
//   this.age = opt.age;
// }

// var t1 = new Teacher2({name:'zs',age:18})
// console.log(t1)

// 模拟new
function objFactory(){
  let obj = new Object();
  let constructor = [].shift.call(arguments);
  // 类数组arguments借用[]的shift方法，绑定this为arguments
  obj.__proto__=constructor.prototype;
  // 将新对象的原型指向构造函数的原型
  let ret = constructor.apply(obj,arguments)
  // 把构造函数的this指向新对象
  return typeof ret == Object ? ret : obj
  // 保证返回的是一个对象
}

function Person(name){
  this.name = name
}

var p = objFactory(Person,'1')
console.log(p)