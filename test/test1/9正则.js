var str = "123abc45defgh";
//:+：贪婪匹配
//:/[a - z]+/
//:test正则对象的匹配
console.log(/[a-z]+/.test(str));//abc
//:match字符串的匹配
console.log(str.match(/[a-z]+/));//abc
console.log(str.match(/[a-z]+$/));//defgh
//:g不停的匹配
console.log(str.match(/[a-z]+/g));//[ 'abc', 'defgh' ]
//replace
console.log(str.replace(/[a-z]+/g,'-------'));//123-------45-------
console.log(str.replace(/([0-9]+)([a-z])+/g,'-------'));//--------------

console.log(str.replace(/([0-9]+)([a-z])+/g,function(){
    console.log(RegExp.$1);
    // console.log(arguments);
}));