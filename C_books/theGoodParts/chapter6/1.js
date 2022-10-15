const arr = [1,2,3,4,4];
//用typeof无法区分都是对象;用Array.isArray
console.log(Array.isArray(arr));