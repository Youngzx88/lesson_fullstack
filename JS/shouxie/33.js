// 实现日期格式化函数

// "2020-12-01'   yyyy /MM/ dd 2020/12/01
// '2020-04-01'   yyyy /MM/ dd 2020/01-01
// '2020-04-01'   yyyy年MM月dd日2020年04月01日

function dateFormat(a,b){
    let day = a.getDate() < 10 ? '0' + a.getDate() : a.getDate();
    let month = a.getMonth()+1;
    month = month < 10 ? '0' + month : month;
    let year = a.getFullYear();
    b = b.replace("yyyy",year);
    b = b.replace("MM",month);
    b = b.replace("DD",day);
    return b;
}


console.log(dateFormat(new Date("2022-3-5"),"yyyy/MM/DD"));
console.log(dateFormat(new Date("2022-3-5"),"yyyy年MM月DD日"));