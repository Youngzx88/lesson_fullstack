//1.数组和对象字面量,类型都是object，除了简单数据类型,其他都是对象
//2.数据容器
const arr = [1,2,3,4,5];
let obj={
    name:"杨仲鑫",
    sex:"男",
    hometown:"南昌"
}
//for in 有点慢
for(let a in arr){
    console.log(a);
}
//对象的遍历
for(let key in obj){
    console.log(key);
}