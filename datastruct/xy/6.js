const stack = [];
stack.push('东北大板');
stack.push('可爱多');
stack.push('巧乐兹');
stack.push('兵工厂');
stack.push('光明奶砖');
// for(i = stack.length-1; i>=0;i--){
//     console.log(stack[i]);
// }

while(stack.length){
    const top = stack[stack.length-1];
    console.log('现在取出来的是:',top);
    stack.pop();
}