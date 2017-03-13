###使用`Konva`通过名称删除事件监听  


我们可以使用`on（）`方法添加命名空间的事件类型，以便我们以后
使用`off（）`方法通过相同的命名空间删除事件监听器。  


![](images/removebyname.png)  


说明：点击圆形可查看两个不同的`onclick`绑定的弹窗。  
 使用按钮删除事件监听器再次单击圆形观察新的onclick绑定。  

Konva Remove By Name Demo[点击查看](https://konvajs.github.io/downloads/code/events/Remove_by_Name.html)  



    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Remove Event Listener by Name Demo</title>
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
    <button id="remove1">
      Remove First Listener
    </button>
    <button id="remove2">
      Remove Second Listener
    </button>
    <button id="removeAll">
      Remove All Listeners
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
    var circle = new Konva.Circle({
      x: stage.getWidth() / 2,
      y: stage.getHeight() / 2 + 10,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });
    circle.on('click.event1', function() {
      alert('First Listener');
    });
    circle.on('click.event2', function() {
      alert('Second Listener');
    });
    layer.add(circle);
    stage.add(layer);
    document.getElementById('remove1').addEventListener('click', function() {
      circle.off('click.event1');
      alert('First onclick removed');
    }, false);
    document.getElementById('remove2').addEventListener('click', function() {
      circle.off('click.event2');
      alert('Second onclick removed');
    }, false);
    document.getElementById('removeAll').addEventListener('click', function() {
      circle.off('click');
      alert('All onclicks removed');
    }, false);
    </script>
    </body>
    </html>