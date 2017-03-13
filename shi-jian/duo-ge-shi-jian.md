要使用`Konva`将多个事件绑定到单个处理程序，我们可以使用`on（）`方法，并传递一个包含多个事件类型用空格开的字符串。 

![](images/multi-events.png)

说明：鼠标经过，鼠标按下和鼠标弹起在圆上，观察 每个事件都执行绑定到圆上的函数。  

Konva Multi_Event Demo[点击查看](https://konvajs.github.io/downloads/code/events/Multi_Event.html)  

    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Multi-Event Binding Demo</title>
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
    function writeMessage(message) {
      text.setText(message);
      layer.draw();
    }
    var stage = new Konva.Stage({
      container: 'container',
      width: 300,
      height: 300
    });
    var layer = new Konva.Layer();
    var text = new Konva.Text({
      x: 10,
      y: 10,
      fontFamily: 'Calibri',
      fontSize: 20,
      text: '',
      fill: 'black'
    });
    var numEvents = 0;
    var circle = new Konva.Circle({
      x: stage.getWidth() / 2,
      y: stage.getHeight() / 2 + 10,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });
    circle.on('mouseover mousedown mouseup', function() {
      writeMessage('Multi-event binding!  Events: ' + (++numEvents));
    });
    circle.on('mouseout', function() {
      writeMessage('');
    });
    layer.add(circle);
    layer.add(text);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html>