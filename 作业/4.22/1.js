let arr = [3,9,6];
let max = arr.reduceRight(function(x, y) {
    console.log(x +"I"+ y);
    return x > y ? x : y;
});

console.log(max);


var func = new Function('a', 'b', 'console.log(a+ b);');
func(1,2);// 3
