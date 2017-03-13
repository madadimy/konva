使用`Konva`检测形状事件，我们可以使用`on（）`方法将事件处理程序绑定到节点.  
`on（）`方法需要事件类型和回调函数。
`Konva`支持`mouseover`，`mouseout`，`mouseenter`，`mouseleave`，`mousemove`，`mousedown`，`mouseup`，`wheel`，`click`，`dblclick`，`dragstart`，`dragmove`和`dragend`桌面事件。

  ![](images/binding.png)  
说明：鼠标悬停和鼠标移出三角形，鼠标悬停，鼠标悬停，鼠标悬停和鼠标悬停在圆圈上  
Konva Binding_Events Demo[点击查看](https://konvajs.github.io/downloads/code/events/Binding_Events.html)    

     <!DOCTYPE html>
     <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Shape Events Demo</title>
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
    var triangle = new Konva.RegularPolygon({
      x: 80,
      y: 120,
      sides: 3,
      radius: 80,
      fill: '#00D2FF',
      stroke: 'black',
      strokeWidth: 4
    });
    var text = new Konva.Text({
      x: 10,
      y: 10,
      fontFamily: 'Calibri',
      fontSize: 24,
      text: '',
      fill: 'black'
    });
    triangle.on('mouseout', function() {
      writeMessage('Mouseout triangle');
    });
    triangle.on('mousemove', function() {
      var mousePos = stage.getPointerPosition();
      var x = mousePos.x - 190;
      var y = mousePos.y - 40;
      writeMessage('x: ' + x + ', y: ' + y);
    });
    var circle = new Konva.Circle({
      x: 230,
      y: 100,
      radius: 60,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });
    circle.on('mouseover', function() {
      writeMessage('Mouseover circle');
    });
    circle.on('mouseout', function() {
      writeMessage('Mouseout circle');
    });
    circle.on('mousedown', function() {
      writeMessage('Mousedown circle');
    });
    circle.on('mouseup', function() {
      writeMessage('Mouseup circle');
    });
    layer.add(triangle);
    layer.add(circle);
    layer.add(text);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html>