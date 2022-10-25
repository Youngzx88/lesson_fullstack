"use strict";

require("core-js");
require("regenerator-runtime");
var arr = [1, 2, 3, 4, 5, 6];
arr.map(function (item) {
  return console.log(item);
});

//新的api需要polyfill
console.log(Array.from(arr, item = item * 2));
