// 编写一个函数，接受一个有10个整数组成的数组(0-9),[1,2,3,4,5,6,7,8,9,0]
// 返回格式是(123) 456-7890的电话号码 字符串

//数组变字符串
// const arr = [1,2,34,5,6];
// arr.join('');
// console.log(typeof(Object.prototype.toString.apply(arr)));

function createPhoneNumber(numbers){
    // return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]} - ${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    numbers = numbers.join('');
    return `(${numbers.substr(0,3)}) ${numbers.substr(3,3)}-${numbers.substr(6)}`
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));