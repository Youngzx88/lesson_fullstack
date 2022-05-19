import {foo} from './m1.js'
import {a} from './m3.js'
console.log(a);
setTimeout(()=>console.log(foo),1000);