1. 什么都不设置的情况下`canvas`会创建为300*150的画布
2. 修改画布：
    - html设置width ，height(`推荐`)
    - css设置width，height(会按照300*150进行缩放-》`不推荐`)
    - js动态设置width，height(和html一样`推荐`)
  ```html
  <style>
  *{
    margin:0;
    padding:0;
  }
  #canvas{
    background-color: #000;
  }
  </style>
  <body>
      <canvas id="canvas" width="400px" height="400px"></canvas>
      <script>
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        context.beginPath();
        context.arc(100,100,50,0,Math.PI * 2,true);
        context.closePath();
        context.fillStyle = 'rgb(255,255,255)';
        context.fill();
      </script>
  </body>
  </html>
  ```
3. 上下文类型(contextType):
  - 2d:代表一个二维渲染上下文
  - webgl：代表一个三维渲染上下文
  - webgl2:代表一恶搞三位渲染上下文，这种情况下只能在浏览器中实现Webgl2

4. 绘制路径
  - 创建路径的方法有很多，具体用到再去查
  - 先画一个`点`
  ```html
  <script>
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.beginPath();//创建路径
    context.arc(100,100,1,0,Math.PI * 2,true);//创建弧/曲线
    context.closePath();//创建从当前点回到起始点的路径
    context.fillStyle = 'rgb(255,255,255)';//设置或返回用于填充绘画的颜色，渐变或模式
    context.fill();//填充当前绘图
  ```
  - 绘制`矩形`
    - `fillRect(x,y,width,height)`绘制一个实心矩形
    - `strokeRect(x,y,width,height)`绘制一个空心矩形
  - 设置`渐变`
    - createLinearGradient(x0,y0,x1,y1),两个点表示渐变的方向
    - gradient.addColorStop(stop,color),可以设置颜色断点
  - drawImgae()，向画布上绘制图像，画布或者视频

5. 炫酷背景特效的通性