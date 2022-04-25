//数据结构 代码的优化是有意义的；平时开发中，算法用的少一点

//怎么创建数组？
const arr = ['','','','',''];//easy way；length 没定？
const arr2 = new Array(7) //8 epmty items 打印不出来
for(i in arr2){
    console.log(arr2[i]);
}
for(j in arr ){
    console.log(arr[j],'---');
}

const arr3 = (new Array(7)).fill(1);//每一项都填充为1
for(j in arr ){
    console.log(arr3[j],'---');
}

//遍历？
const arr4 = [1,2,3,4,5,6,7];
const len = arr4.length;
//1.标准for循环
// for( let i = 0; i < arr4.length; i++)    console.log(arr4[i]);
for( let i = 0; i < len; i++)    console.log(arr4[i]);
//2.for of
let i = 0
for( let item of arr4){
    console.log(item,i,'-');
    i++
}
//3.foreach
arr4.forEach((item2,index)=>{
    console.log(item2,index,'--')
})
//4.map 会改变原数组
arr4.map((item,index)=>{
    console.log(item,index,'---');
    return item;
})


//遍历二维数组
const arr5 = new Array(7);
const outerLen = arr5.length;
for(let i = 0 ; i < outerLen ; i++){
    const innerLen = arr5[i].length;
    for(let j = 0 ; j<innerLen ; j++){
        console.log(arr5[i][j]);
    }
}