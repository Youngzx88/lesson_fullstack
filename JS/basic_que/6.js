//类型转换 显示 隐示


console.log(1+'1');//11
console.log(true + true);//2

console.log(4 + [1,2,3]);//41,2,3
console.log('a'+'b');//ab
console.log('a'+ +'b');//aNaN  从右往左入栈
console.log(+'a1');//NaN
if(! + 'a1'){//NaN的非
    console.log('--------');
}


console.log(4 * '3');//12
console.log(4 * []);//0 乘法不具备加法的优先级：+ 先toString()
