//立即执行函数 + 闭包
var PClass = (function(){
    var a = '私有变量';
    var getA = function(){
        console.log(a,'私有方法');
    }
    var setA = function(val){
        a = val;
    }
    //闭包区域,变量永生
    function P(){
        //闭包内部使用 ，外部用不了
        this.b = 1
    }
    P.prototype = {
        getType: function(type){
            if(type == 'a'){
                getA();
            }
        },
        setType: function(type,val){
            if(type == 'a'){
                setA(val);
            }
        }
    }
    return P;
})()
//public:门户开放型； private:按规矩来
const pclass = new PClass();
console.log(pclass.b);//1
console.log(pclass.a);//undefined
pclass.getType('a');//私有变量 私有变量
pclass.setType('a','rename');
pclass.getType('a');//rename 私有方法