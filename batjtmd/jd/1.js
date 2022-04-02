//代码最重要的是可读性
/*
检查是否为图片
@param {*} file 文件名
@return {boolean} 是否是图片
@author yzx
@Date 2020-3-29
*/
function checkIsImage(file){
    console.log(file);
    //file不能为空
    if(!file){
        return false;
    }
    //新手写法
    /*
    let pos = ['jpg','gif','jpeg','png','svg','webp','awebp'].indexOf(file.split('.')[1]);
    if(pos == -1){//返回值是一个数组,[1]取第二项
        return false;
    }else{
    return true;
    }
    */
    //高手写法
    let imgFormats = ['jpg','gif','jpeg','png','svg','webp','awebp'];
    return imgFormats.indexOf(file.split('.')[1]==-1) ? false : true;
}

console.log(checkIsImage('a.txt'));