function P(){}
function C(){}
var p = new P(); 
C.prototype = P.prototype; //C的原型指向P的原型
C.prototype.test = function(){
  console.log("C的特有方法");
}
var p = new P();
var c = new C();
c.test();
p.test();
//为什么是子类的原型指向父类的实例？ 
//如果是 Child.prototype = Parent.prototype
//1.对子类的原型增加的属性和方法就会影响父类的原型
//2.那么子类就无法获取父类构造函数定义的属性和函数