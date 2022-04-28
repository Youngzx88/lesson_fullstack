const fs = require('fs');

fs.stat('./1.txt',function(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data,'--------');
})

//异步
const info = fs.statSync('./1.txt')
console.log(info)