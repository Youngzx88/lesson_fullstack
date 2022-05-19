var foo = 'bar';
setTimeout(()=>foo = 'baz',5000);

const c = 30;

const a = `2${c}`;

console.log(a);
setTimeout(()=>console.log(foo),1000);
