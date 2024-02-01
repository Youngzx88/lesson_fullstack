const { SourceMapConsumer } = require('source-map')

const rawSourceMap = {"version":3,"sources":["./source1.js"],"names":["youngzx"],"mappings":";;;;;;;;;CAScA","file":"./source1.js"};


const a = async () => {
  await SourceMapConsumer.with(rawSourceMap, null, consumer => {
      consumer.eachMapping(function(m) {
          console.log("🚀 ~ consumer.eachMapping ~ m:", m)
      });    
  });
};
a()