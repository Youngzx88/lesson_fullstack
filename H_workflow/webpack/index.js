const webpack = require('webpack')

webpack([
  {
    entry: './index.js',
    mode: 'production',
    output: {
      filename: 'main.production.js'
    }
  },
  {
    entry: './index.js',
    mode: 'development',
    output: {
      filename: 'main.development.js'
    }
  },
  {
    entry: './index.js',
    output: {
      filename: 'main.unknown.js'
    }
  }
]).run((err, stat) => {
  console.log(stat.toJson())
})
