var age = 24;
var sex = "24";
var arr3 = ['y', 'z', 'x'];
console.log(arr3[599]);
var arr4 = ['y', 'z', 'x'];
console.log(arr4[2]);
var arr6 = ['linbudu'];
console.log(arr6[2]);
var obj1 = {
    name: 'yzx',
    age: 599,
    male: true
};
// console.log(obj1);
// res.code = 10000;
// console.log(res.code);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 3));
var add2 = function (num1, num2, num3) {
    if (num3) {
        return num1 + num2 + num3;
    }
    else {
        return num1 + num2;
    }
};
function func(foo, bar) {
    if (bar) {
        return String(foo);
    }
    else {
        return foo * 599;
    }
}
var res1 = func(599); // number
var res2 = func(599, true); // string
var res3 = func(599, false); // number
var str = "yzx";
var myobj = {
    name: "shit",
    age: 19
};
console.log(myobj);
