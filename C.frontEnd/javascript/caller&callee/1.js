function add(a,b,c){
  console.log(arguments.callee.length)//3
  console.log(add.length)//3
  console.log(arguments.length)//2
}
add(1,3)

var sum = (function(n){
  if(n < 1) return 1;
  else return n + arguments.callee(n-1)
}(10))
console.log("sum",sum)//56