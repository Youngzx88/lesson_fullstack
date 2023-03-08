function calc(obj,callback){
  const {a,b} = obj;
  const sum = a + b * 2;
  callback(sum);
}

const numOpt = {
  a:3,
  b:5
}
calc(numOpt,(res)=>{
  console.log("i get callBack num",res)  
})

console.log("========")


function compute (validator) {
  return function (a,b,type){
    var {isError,errorMsg} = validator(a,b)
    if(isError){
      throw new Error(errorMsg);
    }

    switch(type){
      case '+':
        return a+b;
      case '-':
        return a-b;
      case '*':
        return a*b;
      case '/':
        return a/b;
      default:
        break;
    }
  }
}

var compute = compute(validator);

console.log(compute(1,2,'+'));

function validator (a,b) {
  if(a > 50 && b > 30) {
    return {
      isError:true,
      errorMsg:"a需要小于50，b需要小于30"
    }
  }else{
    return {
      isError:false,
      errorMsg:''
    }
  }
}