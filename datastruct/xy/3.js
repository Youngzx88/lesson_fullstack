// 栈 队列 数组 有什么关系？
// 1. FILO FIFO
// 2. 数组 开箱即用(push pop shift unshift)
//     栈 (栈底push添加 pop删除) 和队列(队头shift删除 队尾push添加)
//     栈和队列都可以基于数组实现

const arr = [1,2];
arr.push(3);//尾部添加
arr.unshift(0);//头部添加
console.log(arr);//[ 0, 1, 2, 3 ]
// console.log(arr.concat([5]));
//splice第二个参数为0,可以作为添加元素,实现插队
arr.splice(1,1,8);
console.log(arr);//[ 0, 8, 2, 3 ]
arr.splice(1,0,9);//切割变相修改
console.log(arr);//[ 0, 9, 8, 2, 3 ]