const func = function(a,b){
    //arguments
    console.log(a,b);
    console.log(arguments,arguments[2]);
}
func(1,2,3);

// const arr = [1,2,3] 
const func2 = (a, b) => { 
    // this 
    console.log(arguments, arguments[2]); 
    console.log(a, b) 
}
func2(1, 2, 3);