const array = [1,2,3,5,1,5,9,1,2,8];
//去除数组重复数值
//方法1：indexof
function uniqueArray(arr){
    var res = [];
    for(var i = 0 ; i < arr.length ; i++){
        if(res.indexOf(arr[i]) == -1){
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(uniqueArray(array));



//2. 方法二hashmap
function uniqueArray2(arr){
    var res = [];
    var map = {};
    for(var i = 0 ; i < arr.length ; i++){
        if(!map.hasOwnProperty(arr[i])){
            map[arr[i]] = i
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(uniqueArray2(array));