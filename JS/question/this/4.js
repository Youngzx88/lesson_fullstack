var obj= {
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


let func = obj.hi();//普通函数 this为Object
func(); 

//bind指定this,并返回一个新的函数,为了稍后执行而准备
func.bind(obj)();


// let sayHi = obj.sayHi();
// let func1 = sayHi();
// func1();              
// obj.say();    