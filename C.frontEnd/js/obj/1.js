//构造函数以大写为规范
function Teacher(){
  this.name = '顶真';
  this.sex = '男';
  this.smoke = function () {
    console.log(this.name+",性别:",this.sex,"在抽烟");
  }
}

var zhangSan = new Teacher()
zhangSan.name = "zhangSan";
zhangSan.smoke()

// 构造函数的正确使用方式
function Teacher2 (opt){
  this.name = opt.name;
  this.age = opt.age;
}

var t1 = new Teacher2({name:'zs',age:18})
console.log(t1)