function flatten(arr){
    while(arr.some((item) => Array.isArray(item))){
        arr = [].concat(...arr);//...arr展开 eg:[1,2,[3,[4,5]]]->[1,2,3,[4,5]];展开成为一个新的数组
        //数字类型也可以通过[].concat变成数组
    }

    return arr;
}
console.log(flatten([1,2,[3,[4,5]]]));

//思考：concat[...arr]怎么实现的
//[...arr] 会把数组展开,[1,2,[3]]会展开成1,2,[3]
//[].concat 和一个空数组concat -》[].concat(1):[1] ,又因为在whille循环当中,所以会不停的展开数组并concat，实现扁平化
