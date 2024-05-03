var reg = /1/g
var regMail = /^.+@[^\s\.]+(\.[^\s\.]+){1,2}$/g
var mail = '1216238955@.com'
console.log(regMail.test(mail))
var str = '12341213123321'

var strNew = str.replaceAll(reg,'a')

console.log(strNew)//a234a2a3a2332a