## 1.事件
### 1.1 注册事件
- 传统方式：onxxx,同一个元素只会触发一个事件
```html
<Button class="btn">按钮1</Button>
<script>
  // 传统的点击事件只会触发最后一次onclick事件
  var btnNode = document.querySelector('.btn')
  btnNode.onclick = function() {
    alert(1)
  }
  btnNode.onclick = function() {
    alert(2)
  }
</script>
```
- 注册监听事件：`addEventListener`:按照注册顺序依次执行
```html
<Button class="btn">按钮1</Button>
<script>
  var btnNode = document.querySelector('.btn')
  btnNode.addEventListener('click',function (){
    alert("?????")
  })
</script>
```
- `attachEvent`(别用)：ie独有

### 1.2 删除事件
- btn.onclick = null
- btn.removeEventListener
```js
btn.addEventListener('click',fn);

function fn() {
  alert(1)
  btn.removeEventListener('click',fn)
}
```
### 1.3 DOM事件流
- 捕获阶段document->html->btn...
- 冒泡阶段btn->html->document
- js代码只能得到 `捕获阶段/冒泡阶段` 其中某一个阶段
- `onclick` 和 `attachEvent` 只能得到`冒泡阶段`
- `addEventListener` 两个阶段都可以得到，第三个参数为`true`捕获阶段，第三个参数为`false`冒泡阶段，默认为`false`
- `onblur` `onfocus` `onmouseover` `onmouseleave`没有冒泡
- 冒泡有的时候有好处，有的时候不方便
### 1.4 事件对象
```js
 btnNode.addEventListener('click',function(e){
  console.log("e",e)//target哪个dom绑定了这个事件
})
```
- `e.target` 与 `this`
  - `e.target`表示的是触发元素的对象(元素)，`this`表示的是绑定事件的对象
### 1.5 阻止默认行为
- `e.preventDefault()`
### 1.6 阻止事件冒泡
- 利用事件对象里的` stopPropagation()`
- `e.cancelBubble()`
### 1.7 事件委托(事件冒泡的场景)
 - 事件委托又叫事件代理，事件委派
 - 原理：不需要遍历子节点，去给每个子节点事件，而是给父节点，通过冒泡原理影响设置每个字节点
 - `例如` ：给`ul`设置事件，对于`ul`中的`li`事件会冒泡到`ul` 上统一处理，只操作一次`dom`，减少`dom`操作次数
 ```html
<body>
  <ul id="ulId">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</body>
<script>
  var ref = document.querySelector('ul')
  ref.addEventListener('click',function(e){
    // e.target得到的是我们点击的对象
    alert(e.target) 
    e.target.style.backgroundColor ='red'
  })
</script>
 ```