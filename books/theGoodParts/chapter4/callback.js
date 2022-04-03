/*
 回调函数： 
    并不是把x的返回值传给y,而是传入整个函数体
    当你需要调用的时候再去使用
*/
//1.基本的回调函数
let x = function(){
    console.log("i am called from inside a function")
};

let y = function(callback){
    console.log("do something");
    callback();
}
y(x);


//2.回调函数的使用
//原来

// let calc = function(num1,num2,callback){
//     if(callback==='add'){
//         return num1+num2;
//     }   
// }
// console.log(calc(2,3,'add'));
//使用回调函数后
let add =function (a,b){
    return a+b;
}
let mutiply =function (a,b){
    return a*b;
}
let calc = function(num1,num2,callback){
    return callback(num1,num2);
}
console.log(calc(2,3,mutiply));
