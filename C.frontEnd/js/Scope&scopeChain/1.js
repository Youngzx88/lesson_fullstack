function a() {
  function b(){
    var b = 2;
  }
  var a = 1;
  b();
}

var c = 3
a()
// a函数被定义的时候，系统生成[[scope]]属性，[[scope]]保存该函数的作用域链
// 该作用于链的第0位存储当前环境下的全局执行期上下文GO
// GO里的存储全局下的所有对象，其中包含函数a和全局变量c









