const age: number = 24;
const sex: string = "24";

const arr3: string[] = ['y', 'z', 'x'];
console.log(arr3[599]);

const arr4: [string, string, string] = ['y', 'z', 'x'];
console.log(arr4[2]);

const arr6: [string, number?, boolean?] = ['linbudu'];
console.log(arr6[2])

interface IDescription {
  name: string;
  age: number;
  male: boolean;
}

const obj1: IDescription = {
  name: 'yzx',
  age: 599,
  male: true,
};
console.log(obj1)


interface Res {
  code: 10000 | 10001 | 50000;
  status: "success" | "failure";
  data: any;
}
declare var res:Res
res.code = 10000
console.log(res.code)


function add(num1:number,num2:number): number{
  return num1+num2;
}
console.log(add(1,3))

const add2 = (num1: number,num2: number,num3? : number): Number => {
  if(num3){
    return num1+num2+num3;
  }else{
    return num1+num2;
  }
}

function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

const res1 = func(599); // number
const res2 = func(599, true); // string
const res3 = func(599, false); // number


type UnionWithNever = "yzx" | 599 | true | void | never;


const str: string = "yzx";

// 从 X 类型 到 Y 类型的断言可能是错误的，blabla
// (str as { handler: () => {} }).handler()

type Struct1 = {
  initProps: string,
  initObj:{
    name:string
  }
}


type Struct2 = {
  initProps: number,
  initObj:{
    age:number
  }
}

type unionStruct = Struct1 & Struct2;

type PrimitivePropType = unionStruct['initProps']; // never
type PrimitivePropObj = unionStruct['initObj']
const myobj:PrimitivePropObj = {
  name: "shit",
  age: 19
}
console.log(myobj)

interface AllStringTypes {
  [key: string]: string;
}
type proptype1 = AllStringTypes["yzx"];
type proptype2 = AllStringTypes['xxx'];



type Stringfy<T> = {
  [K in keyof T]: string
}
type Foo = {
  name: string,
  age: number,
  grade: string,
  sex: boolean
}

var newFoo:Stringfy<string>