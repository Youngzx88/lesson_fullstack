function Teacher(name,age){
  this.name = name
  this.age = age
}
Teacher.prototype = {
  handsome: '帅',
  call: function(){
    console.log(this.name,this.age,this.handsome)
  }
}

var t1 = new Teacher("wuhu",19);

t1.call()//wuhu 19 帅

console.log(Teacher.prototype)
// 实例对象通过 __proto__ 找到 实例prototype（实例原型）
// 实例prototype（实例原型） 通过 contructor 找到构造函数
// 构造函数通过 prototype 指向 实例prototype（实例原型）