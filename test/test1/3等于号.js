//== 类型转换
console.log(0 == 0);//true
console.log(-0 == +0);//false
console.log(-0 === +0);//true
console.log(1 == true);//true
console.log(new Object() == new Object());//false
console.log([1,2]== [1,2]);//false


//类型相同,同== 
//类型不同,尝试类型转换和比较
//null == undefined 相等
//number == string ：string会转number
//boolean == ？ : boolean先转number
//object == number | string 尝试将对象转为基本类型