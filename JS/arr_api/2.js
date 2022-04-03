//手写forEach源码
//forEach是数组的Api
function forEach(arr,callback){
    //完成对数组的遍历
    for(let i = 0;i<arr.length;i++){
        //块级作用域
        const item = arr[i];
        callback(item,i,arr);
    }
}

const items = [1,2,3,4,5]
forEach(items,function(item,index,arr){
    //函数作用域
    console.log(item,index,arr);
})

//items.map 把数组的每一个数字拿出来返回给一个新的数组
const newItems=items.map(function(item){
    //比forEach更高级(可以修改原数组)
    return item+5;
});
console.log(newItems,items);