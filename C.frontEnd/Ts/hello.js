var foo = {
    name: 'wuhu',
    age: 19
};
var joo = {
    name: 'yy',
    title: 'sb'
};
var youngzx = {
    name: 'Youngzx',
    age: 12
};
console.log(youngzx);
var yuwant = {
    name: 'yuwant',
    age: 18
};
console.log(yuwant);
var a = 1;
// 例如把{a:1,b:'x'} => {a:[1,1,1],b:['x','x','x]}
var a2 = { a: [1, 2, 3], b: ['1', 'w', 's'] };
// type getPType = Promise<'Yang'> extends Promise<infer value> ? value : never
var p1 = 'ajksdhjak';
// 数组类型想提取第一个元素的类型怎么做呢？
var arr = ['a', 1, 3];
// 用它来匹配一个模式类型，提取第一个元素的类型到通过 infer 声明的局部变量里返回。
// 但是这个只能匹配精确的字面量，需要匹配类型的话我们要给泛型定义至类型层级
var a4 = 9;
// 如下
var a5 = 241;
var a6 = 3;
// 如下
var a7 = true;
var a8 = [9, 2];
// 如下
var a9 = [3, 'a'];
var s1 = false;
var a10 = 'youngzx';
var b = 'youcjzx';
var s2 = 'asdkja';
var s3 = 'asdkja';
var s4 = 'asdkja';
// 甚至可以写 type TrimAll = trimRight<trimLeft<'    asdkja    '>
function trimString(str) {
    return str;
}
var s = '   asdkja    ';
var sTrimmed = trimString(s);
console.log(sTrimmed);
var hanshu = ['1', 19];
var hansh2u = [];
var returnT = 3;
var a12 = "age";
