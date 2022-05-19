// lib库
var counter = 3;
function incCounter(){
    ++counter;
}
module.exports = {
    get counter(){
        return counter;
    },//向外输出counter
    incCounter
}
