//[1,2,3,4,5,6,7,8,9,0] (123) 456-7890
//代理 es6
const phoneHandler = {
    //监听写操作
    set(target,name,value){
        console.log(target,name,value);
        //正则 []匹配'一'個字符 /[0-9]/g
        // console.log(value.match(/[0-9]/g),'++');
        target[name] = value.match(/[0-9]/g).join('');
    },
    //监听读操作
    get(target,name){
        // console.log('---------');
        return target[name].replace(/([0-9]{3})(\d{3})(\d{4})/,'($1) $2-$3');
    }
}
//{}
const phoneNumbers = new Proxy({},phoneHandler);
//写操作
phoneNumbers.phone = '12dddd34dd567sfffs890';
// phoneNumbers.get('phone');
console.log(phoneNumbers.phone);