//基于array来创一个stack 类class ArrayStack {
//栈的容量


class ArrayStack{
    constructor(n){
        if(this.count>=this.n) return false;
        this.items = [];
        this.n = n;
        this.count = 0;     
    }
    /*入栈操作
    *
    *@func入栈
    *@param {*} item
    *@returns boolean*
    */
    Push(item){
        
    }
    /*
    *@func出栈
    *@returns null 
    */
    pop() {
        if (this.count == 0) return null;
        let tmp = this.items[this.count - 1];
        this.count--;
        return tmp;
    }
    

}
