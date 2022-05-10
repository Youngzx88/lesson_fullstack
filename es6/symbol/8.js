// var sy = sb = Symbol('a');

var PClass = (function(){
    //私有
    const a = Symbol('a');//唯一
    const m = Symbol('m');//唯一
    function P(){
        this[a] = 'a这是私有变量';
        this.b = '变量b公有属性'
        this[m] = function(){
            console.log('-----');
        }
    }
    P.prototype ={
        getA(){
            console.log(this[a]);
            this[m]();
        }
    }
    return P;
})();
const pc = new PClass();
console.log(pc.a);
console.log(pc.b);
pc.getA;