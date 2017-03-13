使用`Konva`在剪辑区域内绘制内容，我们可以设置任何容器的`clip`
属性，包括组，图层或舞台。
剪切区域由`x`，`y`，宽度和高度定义。 在本教程中，
我们将在应用于组的矩形剪裁区域内绘制不规则图形。 


![](images/complex-clip.png)  


Konva Clipping Functions Demo [点击查看](https://konvajs.github.io/downloads/code/clipping/Clipping_Function.html)



    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Clipping Function Demo</title>
    <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #F0F0F0;
    }
    </style>
    </head>
    <body>
    <div id="container"></div>
    <script>
    var width = window.innerWidth;
    var height = window.innerHeight;
    var stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height
    });
    var layer = new Konva.Layer();
    var group = new Konva.Group({
        clipFunc: function(ctx) {
          ctx.arc(250, 120, 50, 0, Math.PI * 2, false);
          ctx.arc(150, 120, 60, 0, Math.PI * 2, false);
        },
        draggable: true
    });
    var blueBlob = new Konva.Line({
        points: [73, 140, 340, 23, 500, 109, 300, 170],
        stroke: 'blue',
        strokeWidth: 10,
        fill: '#aaf',
        tension: 0.8,
        closed : true
    });
    var redBlob = new Konva.Line({
        points: [73, 140, 340, 23, 500, 109],
        stroke: 'red',
        strokeWidth: 10,
        fill: '#faa',
        tension: 1.2,
        scale: {x : 0.5, y : 0.5},
        x: 100,
        y: 50,
        closed : true
    });
    group.add(blueBlob);
    group.add(redBlob);
    layer.add(group);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html>