const arr = [1,2,3,4,5,6];
// let ret = 0;
// for(let num of arr){
//     ret+=num;
// }
// console.log(ret);

//求和的另一种写法 reduce(function(total,currentValue,currentIndex,arr),initialValue)
console.log(arr.reduce((total,currentValue)=>{
    return total+currentValue;
},0));