//es6
//1.箭头函数（如果只有一个参数不用加'()'）：简化函数 相当于3.js中的
const func2 = a => a;
//2.这样用有歧义: 1.函数的{} 2.对象字面量{}
const func = (a,b)=> {val:a+b};
//3.解决方式
const func3 = (a,b)=> ({val:a+b});
//console.log(typeof func);
console.log(func2(4));//4
console.log(func(1,2));//undefined
console.log(func3(1,2));//3


