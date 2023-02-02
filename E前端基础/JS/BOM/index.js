var a = 1;
function fn (){
  console.log(a)
}
console.log("first")
setTimeout(() => {
  fn()
}, 3000);

console.log("wuhuhu")