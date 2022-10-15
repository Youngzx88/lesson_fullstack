// 实现日期格式化函数

// "2020-12-01'   yyyy /MM/ dd 2020/12/01
// '2020-04-01'   yyyy /MM/ dd 2020/01-01
// '2020-04-01'   yyyy年MM月dd日2020年04月01日

//
const dateFormat = (date,format) =>{
    //指向为date
    // console.log(typeof date,Object.prototype.toString.call(date));
    var day = date.getDate()<10 ? '0' +date.getDate() : date.getDate();
    month = date.getMonth() +1;
    var month = date.getMonth()<10 ? '0' +month : month +1;
    var year = date.getFullYear();//getYear()从1900年开始
    // console.log(year,month,day);
    format = format.replace('yyyy',year);
    format = format.replace('MM',month);
    format = format.replace('dd',day)
    return format;
}
console.log(dateFormat(new Date("2020-1-01"),'yyyy/MM/dd'));//new Date传递时间值