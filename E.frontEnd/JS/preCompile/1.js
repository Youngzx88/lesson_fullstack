// AO
function test (a) {
  console.log(a);
  var a = 1;
  console.log(a);
  function a () {}
  console.log(a);
  var b = function () {}
  console.log(b);
  function d(){}
}
test(2)

// GO
var a = 2;
function a () {
  console.log(3)
}
console.log(a)//2

// GO 2
console.log(c,d);
function c () {}
var d = function () {}//[Function: c] undefined