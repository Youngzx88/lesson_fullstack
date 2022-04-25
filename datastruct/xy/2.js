// 二位数组的创建
//1.
const arr =  [
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5]
]
//长方阵列排列的复数或实数矩阵 == 二位数组构建数组高级用法基础
// console.log(arr[0][1]);
//2.有引用式赋值
const arr2 = (new Array(7).fill([]));//引用式赋值
arr2[0][0]=1;//只设置了一个为1，但是二维数组的每一个都为[1]
// console.log(arr2);
//3.避免引用式赋值
const arr3 = new Array(7); //7行
const len = arr.length;
for ( let i = 0; i < len; i++){
    arr3[i] = [];
}
console.log(arr3);