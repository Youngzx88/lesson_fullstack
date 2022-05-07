// let s = Symbol();//独一无二的s
// let s2 = Symbol();

// let obj = {
//     // a: 1
//     // [s] 不是一个简单字符串；而是变量
//     [s]:function(arg){
//         console.log('--------');
//     },
//     [s2]:function(arg){
//         console.log('+++++++++');
//     }
// }
// //obj.a;
// obj[s]();//[]属性访问，加()；因为他是函数
// obj[s2]();
//这样仍然没体现s不同的要求

//!!!!!这样则实现了属性的同名不覆盖，不重复(为了团队协作)
let obj = {
    a: 1,
    // [s] 不是一个简单字符串；而是变量
    [Symbol()]:function(arg){
        console.log('--------');
    },
    [Symbol()]:function(arg){
        console.log('+++++++++');
    }
}
// console.log(obj);
//{
//    [Symbol()]: [Function (anonymous)],
//    [Symbol()]: [Function (anonymous)]
//}

// for(let key in obj){
//     console.log(key);
// }
console.log(
    Object.keys(obj)//[ 'a' ]
)
console.log(
    Object.getOwnPropertyNames(obj)
    //[ 'a' ]
    //[ Symbol(), Symbol() ]
)
console.log(
    Object.getOwnPropertySymbols(obj)//[ Symbol(), Symbol() ]
)
Object.getOwnPropertySymbols(obj)
        .forEach(item =>{
            console.log(obj[item]);
            //[Function (anonymous)]
            //[Function (anonymous)]
        })