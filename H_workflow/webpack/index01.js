const webpack = require('webpack')

webpack([
  {
    entry: './index01.js',
    mode: 'production',
    output: {
      filename: 'main.production.js'
    }
  },
  {
    entry: './index01.js',
    mode: 'development',
    output: {
      filename: 'main.development.js'
    }
  },
  {
    entry: './index01.js',
    output: {
      filename: 'main.unknown.js'
    }
  }
]).run((err, stat) => {
  console.log(stat.toJson())
})
