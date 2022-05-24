"use strict";

var a = 1; //es6的代码，在IE9之前无法运行，ms

var func = function func() {
  return "ssss";
};

var s = Symbol(); //大胆使用新语法，转义后，兼容良好
//es6转es5工具babel
