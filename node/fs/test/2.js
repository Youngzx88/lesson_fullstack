const fs = require('fs');

const files = [ './1.txt', './readme.md', './2.txt' ];

for(let file of files){
    //这样还是异步的,怎样可以让读取文件停下来？

    // fs.readFile(file,(err,data)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data.toString());
    // })
    const data = fs.readFileSync(file);
    console.log(data.toString());
}