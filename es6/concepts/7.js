let var1 = {name:'yzx'}
let var2 = var1;//不是值,给的是地址
// var1.name=var2.name;
var1.name = 'ywt'
console.log(var1.name);//ywt
console.log(var2.name);//ywt