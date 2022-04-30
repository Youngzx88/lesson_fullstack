 //字符串replace传入正则，并用$取到
 const arr = [1,2,3,4,5,6,7,8,9,0];
 console.log( arr.join('').replace(/([0-9]{2})([0-9]{4})([0-9]{3})/,function(){
    return `(${RegExp.$1})+(${RegExp.$2})-(${RegExp.$3})`;//(12)+(3456)-(789)0
 }));

