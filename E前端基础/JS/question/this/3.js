var obj = {
    hi:function(){
        console.log(this);
        //返回值是函数，高阶函数
        //是个箭头函数
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
obj.hi();//obj
const func = obj.hi;//赋值
func();//调用方式是普通函数 window/global


