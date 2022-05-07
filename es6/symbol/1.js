// let s = Symbol();
// console.log(typeof s);//symbol
// let s2 = Symbol();
// console.log(s == s2);//false

// let s3 = Symbol('foo');
// let s4 = Symbol('foo');//Symbol是独一无二的不能重复,所以不相等
// console.log(s3 == s4);

// let obj = {
//     name: '杨仲鑫',
//     age: 22
// };


const o = require('./2.js');
// console.log(o);//多人合作

let newObj = {
    ...o,
    name: 'yzx'//假设加的属性名和原有的冲突，原有的被覆盖
}
console.log(newObj);//{ name: 'yzx', age: 22 }


//如何向对象添加绝对不重复的key？Symbol 唯一

