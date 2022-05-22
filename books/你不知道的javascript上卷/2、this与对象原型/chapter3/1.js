//语法
// var myObj = { key: value };
// var myObj = new Object();
// myObj.key = value;

myobj={
    a:2
}
//{ value: 2, writable: true, enumerable: true, configurable: true }
for(let key in myobj){
    console.log(key);
}
console.log(Object.getOwnPropertyDescriptor(myobj,"a"));
Object.defineProperty(myobj,'a',{
    enumerable:false
})
console.log(myobj.a);//这样仍然可以正常访问，只是不让在循环中遍历了
for(let key in myobj){
    console.log(key);//无法输出,甚至连这个循环都进不去
    console.log('=')
}
console.log(Object.getOwnPropertyDescriptor(myobj,"a"));