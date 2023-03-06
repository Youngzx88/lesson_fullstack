function test1(){
  function test2(){
    a = 5
    var b = 2;
    console.log(a);
  }
  var a = 1;
  return test2();
}
var c = 3;
var test3 = test1;
test3();