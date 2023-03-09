// 对象遍历属性
var obj = {
  a: 1,
  name: 'yzx'
}
// for in 用来循环 key 值
for(var key in obj) {
  console.log(obj[key])
  //1
  //yzx
}
console.log("======================")
function Obj2 () {
  this.name = 'yzx';
  this.color = 'yellow';
}
Obj2.prototype.wuHu = {
  grade: "level One"
}
var o2 = new Obj2()
// 会把原型上的所有属性打印出来
for(var key in o2){
  console.log(o2[key])
  // yzx
  // yellow
  // { grade: 'level One' }
}
console.log("======================")
for(var key in o2){
  if(o2.hasOwnProperty(key)){
    console.log(o2[key])
    // yzx
    // yellow
  }
}