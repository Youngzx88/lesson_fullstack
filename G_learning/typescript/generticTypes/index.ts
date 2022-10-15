type Factory<T> = T | number | string
//等价于如下写法
// function Factory(typeArg){
//   return [typeArg,number,string]
// }

// const sex:Factory<boolean> = 1;
// console.log(sex);


interface Foo {
  foo: string;
  fooOnly: boolean;
  shared: number;
}

interface Bar {
  bar: string;
  barOnly: boolean;
  shared: number;
}

function handle(input: Foo | Bar) {
  if ('foo' in input) {
    input.fooOnly;
  } else {
    input.barOnly;
  }
}


interface NameStruct {
  name: string;
}

interface AgeStruct {
  age: number;
}

type haha = NameStruct | AgeStruct

