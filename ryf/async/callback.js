function f1(callback){
    setTimeout(()=>{
        console.log('f1');
        callback();
    },1000)
}

function f2(){
    console.log('f2');
}
f1(f2);