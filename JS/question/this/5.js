// 1．简单数据类型除了null 之外结果靠谱
//32位 二进制 +1-1值
console.log(typeof null);//object
console.log(typeof 1, typeof 'ss', typeof undefined,typeof false);//number string undefined boolean


//判断一个变量是null
const isUndefined = val => typeof val === 'undefined';
const isNull = val => val === null;
let a;
let b = null;
console.log(isUndefined(a)) ;
console.log(isNull(b)) ;

//接收undefined null
const isNil = val => val === undefined || val === null;
console.log(isNil(a));
console.log(isNil(b));


//number类型，但是要排斥掉NaN(NaN!==NaN)
const isNumber = val => typeof val === 'number' && val===val;
console.log( isNumber('2'));//false
console.log( isNumber(2));//false
//这不是一个数字
console.log(isNumber(NaN));
