require('./main.css')
const { toLowerCase,toUpperCase } = require('./b.js')
const a = 'Hello siri'
console.log(toLowerCase(a))
let oDiv = document.createElement('div')
oDiv.textContent = 'hey siri'
document.body.appendChild(
    oDiv
)
module.exports = a; // commonjs 

