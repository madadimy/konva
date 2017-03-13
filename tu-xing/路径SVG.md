要使用`Konva`添加SVG路径, 我们可以实例化一个`Konva.Path()`对象.

当我们要将SVG路径导出到HTML5 Canvas,或者想将复杂的绘图显示为数据字符串而不是自定义形状时,路径是最常用的.

有关属性和方法的完整列表,请参阅[Konva.Path](https://konvajs.github.io/api/Konva.Path.html)文档

 ![](images/path.png)  

 Konva Path Demo   [点击查看](https://konvajs.github.io/downloads/code/shapes/Path.html)    
 

    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Path Demo</title>
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
    var stage = new Konva.Stage({
      container: 'container',
      width: 300,
      height: 300
    });
    var layer = new Konva.Layer();
    var path = new Konva.Path({
      x: 50,
      y: 40,
      data: 'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
      fill: 'green',
      scale: {
        x : 2,
        y : 2
      }
    });
    // add the shape to the layer
    layer.add(path);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html>