##HTML5 Canvas 使用`Konva` 触发事件 

使用`Konva`触发事件,我们可以用`fire()`方法.   

这使我们能够以编程方式触发事件，如点击，鼠标经过，
鼠标移动等，还可以是自定义事件，如`foo`和`bar`。 

![](images/fireevents.png) 


Konva Fire_Events Demo [点击查看](https://konvajs.github.io/downloads/code/events/Fire_Events.html)



    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Fire Event Demo</title>
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
    var circle = new Konva.Circle({
      x: stage.getWidth() / 2,
      y: stage.getHeight() / 2 + 10,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });
    var text = new Konva.Text({
      text: '',
      fontFamily: 'Calibri',
      fontSize: 24,
      fill: 'black',
      x: 10,
      y: 10
    });
    circle.on('click', function(evt) {
      text.setText('you clicked on the circle!');
      layer.draw();
    });
    layer.add(circle).add(text);
    stage.add(layer);
    // simulate click on circle  模拟鼠标点击事件
    circle.fire('click');
    </script>
    </body>
    </html>