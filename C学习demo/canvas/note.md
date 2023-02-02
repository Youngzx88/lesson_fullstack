## canvas和svg
- 什么是 Canvas？Canvas 是为了解决 Web 页面中只能显示静态图片这个问题而提出的，一个可以使用 JavaScript 等脚本语言向其中绘制图像的 HTML 标签。
- svg 本质上是一种使用 XML 描述 2D 图形的语言。

## 哪里用到canvas
- 图标
- 特效
- 非静态图片
- echarts

## 创建一个canvas
- 直接创建一个anvas，没有设置宽高，那么会自动创建一个 300 * 150 的画布（单位默认为 px）。
- 改变画布大小的三种方案
  - html设置`<canvas id="canvas" width="400" height="400">`
  - (别用)css设置:画布就会按照 300 * 150 的比例进行缩放，也就是将 300 * 150 的页面显示在 400 * 400 的容器中。`#canvas {background: #000;width: 400px; height: 400px;}`
  - js设置
  ```js
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var cx = canvas.width = 400;
  var cy = canvas.height = 400;
  ```

## 获取canvas对象
- canvas.getContext(contextType, contextAttributes);
- 上下文类型（contextType）：
  - 2d（本小册所有的示例都是 2d 的）：代表一个二维渲染上下文
  - webgl（或"experimental-webgl"）：代表一个三维渲染上下文
  - webgl2（或"experimental-webgl2"）：代表一个三维渲染上下文；这种情况下只能在浏览器中实现 WebGL 版本2 (OpenGL ES 3.0)。

## 绘制路径
- PS 中的路径是矢量的，而 Canvas 中的路径不是
- 方法
```
fill()	填充路径
stroke()	描边
arc()	创建圆弧
rect()	创建矩形
fillRect()	绘制矩形路径区域
strokeRect()	绘制矩形路径描边
clearRect()	在给定的矩形内清除指定的像素
arcTo()	创建两切线之间的弧/曲线
beginPath()	起始一条路径，或重置当前路径
moveTo()	把路径移动到画布中的指定点，不创建线条
lineTo()	添加一个新点，然后在画布中创建从该点到最后指定点的线条
closePath()	创建从当前点回到起始点的路径
clip()	从原始画布剪切任意形状和尺寸的区域
quadraticCurveTo()	创建二次方贝塞尔曲线
bezierCurveTo()	创建三次方贝塞尔曲线
isPointInPath()	如果指定的点位于当前路径中，则返回 true，否则返回 false
```
- 过程
```js
context.beginPath();       // 起始一条路径，或重置当前路径
context.arc(100, 100, 1, 0, Math.PI * 2, true);  // 创建弧/曲线
context.closePath();       // 创建从当前点回到起始点的路径
context.fillStyle = 'rgb(255,255,255)'; // 设置或返回用于填充绘画的颜色、渐变或模式
context.fill();      
```

## arc()方法
- context.arc(x,y,r,sAngle,eAngle,counterclockwise);
  - x：圆心的 x 坐标
  - y：圆心的 y 坐标
  - r：圆的半径
  - sAngle：起始角，以弧度计（弧的圆形的三点钟位置是 0 度）
  - eAngle：结束角，以弧度计
  - counterclockwise：可选。规定应该逆时针还是顺时针绘图。false 为顺时针，true 为逆时针


## 绘制直线
- moveTo(x,y)：把路径移动到画布中的指定点，不创建线条
- lineTo(x,y)：添加一个新点，然后在画布中创建从该点到最后指定点的线条
- 如果没有 moveTo，那么第一次 lineTo 的就视为 moveTo
- 每次 lineTo 后如果没有 moveTo，那么下次 lineTo 的开始点为前一次 lineTo 的结束点。
```js
context.beginPath();
context.moveTo(50,50);
context.lineTo(100,100);
context.strokeStyle = '#fff';
context.stroke();
```

## 给直线添加样式
- lineCap	设置或返回线条的结束端点样式
- lineJoin	设置或返回两条线相交时，所创建的拐角类型
- lineWidth	设置或返回当前的线条宽度
- miterLimit	设置或返回最大斜接长度

## 绘制矩形
- fillRect(x,y,width,height)：绘制一个实心矩形
- strokeRect(x,y,width,height)：绘制一个空心矩形
```js
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var cx = canvas.width = 400;
var cy = canvas.height = 400;
// 长方形fillStyle需要卸载fillRect之前
context.beginPath();
context.fillRect(10, 10, 100, 100);
context.fillStyle = '#fff'
context.fill()
context.strokeRect(130, 10, 100, 100);
context.strokeStyle = '#fff'
context.stroke()
```
- 都是通过先创建路径，然后再使用 fill() 或 stroke() 进行填充或者描边。

## 颜色、样式、阴影
- fillStyle
- strokeStyle
- shadowBlur(阴影)
```js
context.shadowBlur = 20;
context.shadowColor = '#fff';
```

## 渐变
```js
createLinearGradient()	创建线性渐变（用在画布内容上）
createPattern()	在指定的方向上重复指定的元素
createRadialGradient()	创建放射状/环形的渐变（用在画布内容上）
addColorStop()	规定渐变对象中的颜色和停止位置
```
```js
//4个参数分别为x0,y0,x1,y1
var grd = context.createLinearGradient(100,100,100,200);
grd.addColorStop(0,'pink');
grd.addColorStop(1,'white');
context.fillRect(0,0,400,400)
```

## 图形转换
```js
scale()	缩放当前绘图至更大或更小
rotate()	旋转当前绘图
translate()	重新映射画布上的 (0,0) 位置
transform()	替换绘图的当前转换矩阵
setTransform()	将当前转换重置为单位矩阵，然后运行 transform()
```

## 实现随机粒子特效

### 1. 创建全屏canvas
```js
  const canvasDom = document.querySelector("#canvas")
  const context = canvasDom.getContext("2d");
  var WIDTH = document.documentElement.clientWidth;
  var HEIGHT = document.documentElement.clientHeight;
  var cx = canvasDom.width = WIDTH;
  var cy = canvasDom.height = HEIGHT;
```

### 2. 设置Round_item类
- 创建Round_item类
```js
//这里我们使用了构造函数的方式来创建单个的圆，我们还需要一个变量 initRoundPopulation 来设置 round 的个数，然后我们便可以通过 for 循环创建出 initRoundPopulation 个圆。
 function Round_item(index,x,y) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.r = Math.random() * 2 + 1;
        var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
        this.color = "rgba(255,255,255," + alpha + ")";
}
```
### 3. 设置draw()方法
- 在设置了单个的 Round_item 类之后，我们还要给每一个 round 设置 draw() 方法，所以我们需要将 draw() 方法设置在 Round_item 的原型中，这样我们创建出来的每一个 Round_item 实例对象都拥有了 draw() 方法。
```js
Round_item.prototype.draw = function () {
    content.fillStyle = this.color;
    content.shadowBlur = this.r * 2;
    content.beginPath();
    content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    content.closePath();
    content.fill();
};
```
### 4.设置初始化 init() 函数
- 然后我们就需要设置初始化 init() 函数了，在 init() 函数中，我们的主要任务是创建单个的 round，然后使用其 draw() 方法。
```js
function init() {
  for(var i = 0; i < initRoundPopulation; i++ ){
      round[i] = new Round_item(i,Math.random() * WIDTH,Math.random() * HEIGHT);
      round[i].draw();
  }
  }
```


## 随机粒子动起来
### 1. animate()函数
- 所以我们需要一个 animate() 函数，这个函数的作用是帮助我们形成动画，我们在这个函数中首先需要清除当前屏幕，这里的清除函数用到的是 content.clearRect() 方法。
- `context.clearRect(x,y,width,height);`
- 我们需要清除的区域是整个屏幕，所以 content.clearRect() 的参数就是 content.clearRect(0, 0, WIDTH, HEIGHT);，这里我们就用到了之前获取的屏幕宽度和高度的常量：WIDTH 和 HEIGHT。这样我们就将屏幕上的所有内容都清除了。

### 2. requestAnimationFrame() 
- window.requestAnimationFrame() 方法告诉浏览器，你希望执行动画，并请求浏览器调用指定的函数在下一次重绘之前更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。
- requestAnimationFrame 采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为间隔时间太长，使动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果。
- 所以我们就使用 requestAnimationFrame() 函数递归的调用 animate() 函数来实现动画的效果。
```js
    function animate() {
        content.clearRect(0, 0, WIDTH, HEIGHT);

        for (var i in round) {
            round[i].move();
        }
        requestAnimationFrame(animate);
    }
```

### 3. 创建move函数
- 和 draw() 方法相同，我们也要将 move() 方法写在 Round_item 的原型上，这样我们创建的每一个 round 都具有了 move() 方法。
- 在 move() 方法中，我们只需要改变 round 的 y 坐标即可，并且设置边界条件，当 y 坐标的值小于 -10（也可以是其他负值），代表该 round 已经超出了屏幕，这个时候我们要将其移动到屏幕的最底端，这样才能保证我们创建的粒子数不变，一直是 initRoundPopulation 的值。

### 4. init 中加入move


## 鼠标与屏幕互动