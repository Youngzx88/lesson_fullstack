eval(`
function add(a,b) {
  console.log(a+b) 
}
add(1,3)
//# sourceURL=eval.js
`)

eval(`
function add(a,b) {
  console.log(a+b) 
}
add(1,6)
//# sourceMappingURL=eval.js
`)

// 这样，动态 eval 的代码也能关联到源码，并且能打断点了！

// webpack 就利用了 eval 这个特性来优化的 sourcemap 生成的性能，比如你可以指定 devtool 为 eval：