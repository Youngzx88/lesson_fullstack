// 题目：使用栈实现队列的一下操作
// push(x)  -- 尾部添加
// pop() -- 队列首部删除
// peek() -- 返回队列首部元素
// empty() -- 返回队列是否为空

// queue = new MyQueue()
// queue.push(1)
// queue.push(2)
// queue.peek()  // 1
// queue.pop()  // 1
// queue.empty()  // false


const MyQueue = function() {
  this.stack1 = []
  this.stack2 = []
}
MyQueue.prototype.push = function(x) {
  this.stack1.push(x)
}
MyQueue.prototype.pop = function() {
  // 栈2是空的
  if (this.stack2.length <= 0) {
    while(this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop()
}
MyQueue.prototype.peek = function() {
  // 栈2是空的
  if (this.stack2.length <= 0) {
    while(this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2[this.stack2.length - 1]
}
MyQueue.prototype.empty = function() {
  return !this.stack1.length && !this.stack2.length
}


let queue = new MyQueue()
queue.push(1)
queue.push(2)
// queue.pop()  // 1
// queue.peek()  // 2
console.log(queue);