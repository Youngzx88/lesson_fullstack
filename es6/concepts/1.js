//两个世界:函数[call]+构造函数[constructor]
//call指向全局
//constructor this实例 默认返回值
'use strict'
function Dog(type){
    //函数都有this,不管是以什么方式运行
    //this是一个指针，和运行方式相关
    console.log(this);//普通函数 undefined;浏览器 window;node global
    this.type=type;
    
}
Dog();
new Dog();//this指向实例化后的对象,作为构造函数