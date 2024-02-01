// 创建一个 SourceMapGenerator 对象
// 通过 addMapping 方法添加一个映射
// 通过 toString 转为 sourcemap 字符串
const { SourceMapGenerator } = require('source-map');

const map = new SourceMapGenerator({
  file:'./source1.js'
})

map.addMapping({
  generated: {
    line: 10,
    column: 1
  },
  name: "youngzx",
  source: "./source1.js",
  original: {
    line: 10,
    column: 14
  },
})
console.log(map.toString());