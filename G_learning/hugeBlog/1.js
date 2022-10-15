let a = 1.2335345;
//null是简单数据类型 但是返回却是Object
console.log(typeof null);// bug 32位 前三位
console.log(typeof a,0.1+0.2);//不精确
//a是简单数据类型,但是可以.toFix(),好像它是一个对象
//在js中,基于对象的语言 : toFixed(a)
console.log(a.toFixed(3));

let num = new Number(3);
console.log(num,typeof num);