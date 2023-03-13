//deepClone
var obj = {
  name: 'yzx',
  age: 18,
  children: {
    first: "one",
    second: "second",
    third: "third",
  },
  books: ["b1","b2","b3"]
}
Object.prototype.num = 1;
function deepClone(origin,target){
  var target = target || {};
  for(var key in origin){
    // 先筛选自己的属性，防止原型链上的也被复制过来了
    if(origin.hasOwnProperty(key)){
      // 在这里判断是否是引用属性的值(对象里面套对象)
      if(typeof(origin[key]) === 'object' && origin[key] !== null){
        if(Object.prototype.toString.call(origin[key]) === '[object Array]'){
          target[key] = [];
          deepClone(origin[key],target[key],)
        }else{
          target[key] = {};
          deepClone(origin[key],target[key],)
        }
      }else{
      // 如果是原始值
        target[key] = origin[key]
      }
    }
  }
  return target;
}

var obj2 = deepClone(obj)
obj2.children.fourth1 = "whuu"
obj2.books.push("123")
console.log("obj",obj)
// obj {
//   name: 'yzx',
//   age: 18,
//   children: { first: 'one', second: 'second', third: 'third' },
//   books: [ 'b1', 'b2', 'b3' ]
// }
console.log("obj2",obj2)
// obj2 {
//   name: 'yzx',
//   age: 18,
//   children: { first: 'one', second: 'second', third: 'third', fourth1: 'whuu' },
//   books: [ 'b1', 'b2', 'b3', '123' ]
// }