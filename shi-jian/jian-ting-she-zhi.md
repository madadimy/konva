
使用`Konva`设置监听事件,我们可以设置是否监听
当对象被实例化时，配置对象的属性为`true`或`false`，
或者我们可以使用`setListening（）`方法设置`listen`属性。
一旦我们为一个或多个节点设置了侦听属性，我们也需要
使用`drawHit（）`方法重绘每个受影响图层的命中图。  

![](images/listenforevents.png)

说明：鼠标经过椭圆形以观察事件监听未执行。
单击“Listen”开始监听事件，并观察事件处理程序现在是否被执行。  

Konva Listen_for_Events Demo[点击查看](https://konvajs.github.io/downloads/code/events/Listen_for_Events.html)   


    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Listen or Don’t Listen to Events Demo</title>
    <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #F0F0F0;
    }
    #buttons {
        position: absolute;
        top: 5px;
        left: 10px;
    }
    </style>
    </head>
    <body>
    <div id="container"></div>
    <div id="buttons">
    <button id="listen">
      Listen
    </button> 
    <button id="dontListen">
      Dont' Listen
    </button>
    </div>
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
      x: 70,
      y: 10,
      fontFamily: 'Calibri',
      fontSize: 24,
      text: '',
      fill: 'black'
    });
    var oval = new Konva.Circle({
      x: stage.getWidth() / 2,
      y: stage.getHeight() / 2,
      radius: 50,
      scaleX: 2,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      strokeScaleEnabled: false,
      listening: false
    });
    oval.on('mouseover', function() {
      writeMessage('Mouseover oval');
    });
    oval.on('mouseout', function() {
      writeMessage('');
    });
    layer.add(oval);
    layer.add(text);
    stage.add(layer);
    document.getElementById('listen').addEventListener('click', function() {
      oval.setListening(true);
      layer.drawHit();
    }, false);
    document.getElementById('dontListen').addEventListener('click', function() {
      oval.setListening(false);
      layer.drawHit();
    }, false);
    </script>
    </body>
    </html>