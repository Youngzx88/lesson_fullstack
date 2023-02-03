console.log('1'.toString());//a被包装了一下，类型的转换String
console.log(typeof '1');//string
console.log(typeof new String('1'));//object


//js长久以来的一个bug，32位系统，为了性能(typeof)考虑，我们使用低位存储变量的类型
console.log(typeof null);//object typeof检查null检查的ascii是前三位
console.log(typeof undefined);//undefined

// console.log(undefined.toString());//报错