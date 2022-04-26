const stack = []; // 数组栈 

stack.push('东北大板');
stack.push('可爱多');
stack.push('巧乐兹');
stack.push('兵工厂');
stack.push('光明奶砖');

// 遍历  出栈
while(stack.length) {
    // const top = stack.pop();
    const top = stack[stack.length - 1];
    console.log('现在取出来的雪糕是', top);
    stack.pop();
}