# addEventListener 的第三个参数
### 1.event, function, useCapture
```javascript
 element.addEventListener(event, function, useCapture)
```
- useCapture
    - true - 事件句柄在捕获阶段执行（即在事件捕获阶段调用处理函数）
    - false- 默认。事件句柄在冒泡阶段执行（即表示在事件冒泡的阶段调用事件处理函数）


### 2.冒泡还是捕获？
- 对于事件代理来说，在事件捕获或者事件冒泡阶段处理并没有明显的优劣之分，但是由于事件冒泡的事件流模型被所有主流的浏览器兼容，从兼容性角度来说还是建议大家使用事件冒泡模型。