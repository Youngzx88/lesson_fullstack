require ('./main.css')
const {toLowerCase} = require('./b.js');
const a = 'hello siri'
console.log(a);
module.export = a;//commonjs
console.log(toLowerCase);
let oDiv = document.createElement('div');
oDiv.textContent ="hey siri"
doucument.body.appendChild(
    oDiv
)