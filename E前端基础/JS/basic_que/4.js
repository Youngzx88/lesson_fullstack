var str = 'hello world';
//虽然str在调用toString的时候会自动包装，但是在平常调用时却不会
console.log(str instanceof String);//false

var str1 = new String('hello world');
console.log(str1 instanceof String);//true

