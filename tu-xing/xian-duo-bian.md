要使用`Konva`创建一个多边形, 我们可以实例化一个`Konva.Line()`对象和`closed=true`属性.

有关属性和方法的完整列表,请参阅[Konva.Line](https://konvajs.github.io/api/Konva.Line.html)文档

 ![](images/polygon.png)  

 Konva Simple-Line Demo   [点击查看](https://konvajs.github.io/downloads/code/shapes/Line_-_Polygon.html)   
   

    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Line Polygon Demo</title>
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
    var poly = new Konva.Line({
      points: [23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93],
      fill: '#00D2FF',
      stroke: 'black',
      strokeWidth: 5,
      closed : true
    });
    // add the shape to the layer
    layer.add(poly);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html>