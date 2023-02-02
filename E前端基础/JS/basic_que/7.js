//对象类型转换
const obj = {
    value: 1,
}
console.log(obj == 1);//false


const obj2 = {
    value: 1,
    valueOf(){
        return 1;
    }
}
console.log(obj2 == 1);//true