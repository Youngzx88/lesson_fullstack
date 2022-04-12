var obj = {
    hi:function(){
        console.log(this);
        return ()=>{
            console.log(this);
        }
    },
    sayHi:function(){
        return function(){
            console.log(this);
            return ()=>{
                console.log(this);
            }
        }
    },
    say:()=>{
        console.log(this,);
    }
}
let hi = obj.hi();      //{ hi: [Function: hi], sayHi: [Function: sayHi], say: [Function: say] } 指向obj
hi();                   //{ hi: [Function: hi], sayHi: [Function: sayHi], say: [Function: say] } 指向obj
let sayHi = obj.sayHi();//Object [global] //箭头函数没有this指向global
let func1 = sayHi();
func1();                //Object [global]
obj.say();              //{}