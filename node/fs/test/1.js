// 1. operation system fs
//     - js挺进后端开发
// 2. 路径
//     - Path
//     1. js 内存 -> fs.readFile -> I/O -> 硬盘 -> 文件 -> 内存
const fs = require('fs');//node js 关键字 commonjs模块化规范之一
// fs.readFile('./readme.md',function(err,data){
//     if(!err){
//         console.log(data.toString());
//     }else{
//         console.log(err);
//     }
// })

const files = ['./1.txt','./readme.md','./2.txt',]

function readFile(path,callback){
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        callback(data);//决定文件的去向(打印/下载/...),并且可以控制顺序
    })
}

readFile('./readme.md',(data)=>{
    console.log(data.toString());
    readFile('./1.txt',(data)=>{
        console.log(data.toString(),'+++++++');
        readFile('./2.txt',(data)=>{
            console.log(data.toString(),'---------');
        })
    })
})
//异步
// files.forEach((file) =>{
//     fs.readFile(file,function(err,data){
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(data.toString());  
//     })
// })
// console.log('-------------');