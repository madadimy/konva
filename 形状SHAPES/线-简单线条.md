要使用`Konva`创建一个简单的线条, 我们可以实例化一个`Konva.Line()`对象.

有关属性和方法的完整列表,请参阅[Konva.Line](https://konvajs.github.io/api/Konva.Line.html)文档

 ![](images/simple-line.png)  

 Konva Simple-Line Demo   [点击查看](https://konvajs.github.io/downloads/code/shapes/Line_-_Simple_line.html)   




    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Simple Line Demo</title>
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
    var redLine = new Konva.Line({
      points: [5, 70, 140, 23, 250, 60, 300, 20],
      stroke: 'red',
      strokeWidth: 15,
      lineCap: 'round',
      lineJoin: 'round'
    });
    // dashed line
    var greenLine = new Konva.Line({
      points: [5, 70, 140, 23, 250, 60, 300, 20],
      stroke: 'green',
      strokeWidth: 2,
      lineJoin: 'round',
      /*
       * line segments with a length of 33px
       * with a gap of 10px
       */
      dash: [33, 10]
    });
    // complex dashed and dotted line
    var blueLine = new Konva.Line({
      points: [5, 70, 140, 23, 250, 60, 300, 20],
      stroke: 'blue',
      strokeWidth: 10,
      lineCap: 'round',
      lineJoin: 'round',
      /*
       * line segments with a length of 29px with a gap
       * of 20px followed by a line segment of 0.001px (a dot)
       * followed by a gap of 20px
       */
      dash: [29, 20, 0.001, 20]
    });
    /*
     * since each line has the same point array, we can
     * adjust the position of each one using the
     * move() method
     */
    redLine.move({
      x : 0,
      y : 5
    });
    greenLine.move({
      x : 0,
      y : 55
    });
    blueLine.move({
      x : 0,
      y : 105
    });
    layer.add(redLine);
    layer.add(greenLine);
    layer.add(blueLine);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html>
