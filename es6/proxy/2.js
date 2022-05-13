const obj ={
    name:'_island',
    score:59
}
// const objProxy = new Proxy(obj,{});
// console.log(objProxy);


const objProxy = new Proxy(obj,{
    //handler处理捕捉器
    //对读操作拦截
    get: function(target,key){
        console.log(`补货到对象获取${key}属性的值的操作`)
        return target[key];
    },
    //对写操作拦截
    set: function(target,key,val){
        //val要修改的值
        if(key == 'age'){
            if(typeof val == 'number'){
                target[key] = val;
            }else{
                throw new TypeError('该属性的值必须s是Number类型')
                // console.warn('该属性必须是number类型');
            }
        }else{
            target[key] = val;
        }
    }
})

console.log(objProxy.name);//get不写返回值返回undefined//补货到对象获取name属性的值的操作
try {
    objProxy.age = '榆木脑袋';//TypeError: 该属性的值必须是Number类型
}catch(e){
    console.log(e);
}
objProxy.age = 38;
console.log(objProxy.age);
 