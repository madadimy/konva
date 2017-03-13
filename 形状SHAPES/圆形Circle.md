要使用`Konva`创建一个圆形, 我们可以实例化一个`Konva.Circle()`对象.  

有关属性和方法的完整列表,请参阅[Konva.Circle](https://konvajs.github.io/api/Konva.Circle.html)文档

 ![](images/circle.png)  

 Konva Circle Demo   [点击查看](https://konvajs.github.io/downloads/code/shapes/Circle.html)  

      
    <!DOCTYPE html>
	<html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Circle Demo</title>
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
    var circle = new Konva.Circle({
      x: stage.getWidth() / 2,
      y: stage.getHeight() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });
    // add the shape to the layer
    layer.add(circle);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html> 
        