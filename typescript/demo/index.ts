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