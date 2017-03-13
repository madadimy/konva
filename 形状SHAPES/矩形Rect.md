要使用`Konva`创建一个矩形, 我们可以实例化一个`Konva.Rect()`对象.  

有关属性和方法的完整列表,请参阅[Konva.Rect](https://konvajs.github.io/api/Konva.Rect.html)文档



 ![](images/rect.png)

 
 Konva Rect Demo [点击查看](https://konvajs.github.io/downloads/code/shapes/rect.html)  

     Konva Rect Demo    
     <!DOCTYPE html>
      <html>
      <head>
       <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
      <meta charset="utf-8">
      <title>Konva Rect Demo</title>
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
    var rect = new Konva.Rect({
      x: 50,
      y: 50,
      width: 100,
      height: 50,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4
    });
    // add the shape to the layer
    layer.add(rect);
    // add the layer to the stage
    stage.add(layer);
     </script>
     </body>
     </html>




