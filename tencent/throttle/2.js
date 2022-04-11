//call(thisobj,param1,param2)
//手写call方法 函数

// console.log(Function);
let yzx = {
    name:'Youngzx'
}


Function.prototype.call2 = function(thisObj,...args){
    console.log('call2',thisObj,args);
    thisObj = args[0]?args[0]:null;
    args.shift(1);
    console.log(args);

}
function func(){

}
func.call2(yzx,1,2,3,4,5);
console.log(func.__proto__);
console.log(func instanceof Function);
console.log(Function);