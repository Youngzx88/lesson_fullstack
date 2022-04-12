count=0;
function func(){
    console.log(this);//global
    this.count++;//这里的this是指global,所以这个count！==func.count
    console.log(count);//1
}
func.count=0;
func();
console.log(func.count);//0
