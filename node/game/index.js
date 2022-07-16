const game = require('./game.js')

let winCount = 0;//计算赢的次数
Process.stdin.on('data',(buffer)=>{
  // console.log(buffer)
  const action = buffer.toString().trim()
  const result = game(action)
})