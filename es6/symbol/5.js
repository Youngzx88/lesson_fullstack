//数组去重
const arr = [12,5,8,8,130,44,130,'a','b','a'];
//set?太简单了
//去重的高级用法(但是整数也变成字符串了)
const obj = {};
arr.forEach(item =>{
    obj[item] = item;
})
console.log(Object.keys(obj));
