//数字
let a = 123456778978973452;//number?
console.log(a+1);//数字太大,超过计算范围
console.log(0.1+0.2);//小数相加，用二进制会有精度错误
console.log(typeof a);
//大数
let b = 123456778978973452123456778978973452n;//在后面加n表示大数字
console.log(typeof b);//bigint
//大数的运算
let c = 123456778978973452123456778978973452n;
let d = BigInt("123456778978973452123456778978973452");
console.log(c+d);//可以计算:246913557957946904246913557957946904n

console.log(1n+2n);//3n
console.log(5n/2n);//2n
// console.log(5n+1);//报错不能将bigInt和别的类型混用
// 隐式类型转换
console.log(true + 1);//2 ;字符串优先级高于'+'
// 强制类型转换
console.log(5n+BigInt(1));//6n  
console.log(Number(5n)+1);//6
