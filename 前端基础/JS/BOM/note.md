## BOM
### 1. BOM构成
- window
  - document
  - location
  - navigation
  - screen
  - history

### 2. BOM事件
- onload：当文档内容完全加载完成后会触发该事件(包括图像，脚本，css)
```js
window.onload = function () {

}
node.addEventListener('click',function (){

})
```
- DOMContentLoaded:仅仅当dom加载完成后，不包括样式表，图片，flash等
- onresize