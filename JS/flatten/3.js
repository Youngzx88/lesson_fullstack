function flatten(arr){
    while(arr.some((item) => Array.isArray(item))){
        arr = [].concat(...arr);//...arr展开 eg:[1,2,[3,[4,5]]]->[1,2,3,[4,5]];展开成为一个新的数组
        //数字类型也可以通过[].concat变成数组
    }
    
    return arr;
}
console.log(flatten([1,2,[3,[4,5]]]));

//思考：concat[...arr]怎么实现的