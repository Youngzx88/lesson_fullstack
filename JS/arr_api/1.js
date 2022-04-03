//1.数组和对象字面量,类型都是object，除了简单数据类型,其他都是对象
//2.数据容器
const arr = [1,2,3,4,5];
console.log(Object.prototype.toString.call(arr));//[object Array]
console.log(typeof(arr));//object
console.log(Array.isArray(arr));//true
let obj={
    name:"杨仲鑫",
    sex:"男",
    hometown:"南昌"
}
console.log(Object.prototype.toString.call(obj));//[object Object]
//循环
    //1.for in(有点慢)
/*
for(let a in arr){
    console.log(a);
}
*/
    //2.计数循环(很快，缺点是代码思维机器)
/*
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
*/
    //3.es6方案(可读性更好,面向人类编程)
/*
for(let item of arr){
    console.log(item);
}
*/
    //4.for each(call back)
arr.forEach(function(item,index){
    console.log(index+":"+item);

})
    //5.对象的遍历
for(let key in obj){
    console.log(key);
}