const name = 'Snickers';
const age = 2;
console.log("My dog"+name+"is"+age+"years old");

const name2 = 'egg';
const age2 = 1;
console.log("My dog"+name+"is"+age+"years old");

//如果函数体只有一句代码,并且是返回值的话,连花括号可以省略
const sayMyDog = (name,age) => {
    //字符串模板
    return `My dog${name} is ${age} years old`;
    //return "My dog"+name+"is"+age+"years old";
}
console.log(sayMyDog(name2,dog2));