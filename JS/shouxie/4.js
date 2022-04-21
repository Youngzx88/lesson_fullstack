const array = [1,2,3,5,1,5,9,1,2,8];
// call 摇人指定函数this ->第一个参数
// call借
// console.log(typeof array,object.prototype.toString.call(array));
const uniqueArray = ( arr) =>{
    let res = [];
    let map = {};
    // o(n^2)-> o(n)
    for ( let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if(!map.hasOwnProperty(temp)){
            map[temp] = i;
            res.push(temp);
        }
        // if (res.indexOf(temp) == - 1) {
        // res.push(temp ) ;
        // }
    }
    return res;
}
console.log(uniqueArray(array));