const city = {
    name: '南昌县',
    population: '100万'
};
// 经纬度反查
// 115.941768,28.555475
const location = {
    longitude: '115.941768',
    latitude: '28.555475'
}

//es6 reset 运算符 ...args
//...展开运算符
const hometown ={
    ...city,
    ...location
}
console.log(hometown);