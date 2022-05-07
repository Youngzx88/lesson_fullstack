const spread = [12,5,8,8,130,44,130];
//1.要用filter去实现unique
const uniqueArr = spread.filter((item,index,arr)=>{
    // console.log(item,index,arr);
    //重复项就false
    return arr.indexOf(item) == index;// 第二个8: 2 == 3 false
})
console.log(uniqueArr);

//2.set
const arr = [...new Set(spread)];
console.log(arr);
