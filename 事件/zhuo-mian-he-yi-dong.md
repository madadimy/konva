要向使用`Konva`的桌面和移动应用程序工作的形状添加事件处理程序，我们可以使用`on（）`方法并传递配对的事件。    

例如，为了在桌面和移动应用程序上触发`mousedown`事件，我们可以使用“mousedown touchstart”事件对来覆盖这两种媒体。  
  
为了在桌面和移动应用程序上触发mouseup事件，我们可以使用“mouseup touchend”事件对。  

我们还可以使用“dblclick dbltap”事件对来绑定适用于桌面设备和移动设备的双击事件。   

![](images/desktop-mobile.png) 


说明：在桌面设备或移动设备上进行鼠标移动，鼠标向上，触摸启动或触摸圈子，以观察相同的功能。   

Konva Desktop_and_Mobile Demo[点击查看](https://konvajs.github.io/downloads/code/events/Desktop_and_Mobile.html)



    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Desktop and Mobile Events Support Demo</title>
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
    var circle = new Konva.Circle({
      x: stage.getWidth() / 2,
      y: stage.getHeight() / 2 + 10,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });
    /*
    * mousedown and touchstart are desktop and
    * mobile equivalents so they are often times
    * used together
    */
    circle.on('mousedown touchstart', function() {
      writeMessage('Mousedown or touchstart');
    });
    /*
    * mouseup and touchend are desktop and
    * mobile equivalents so they are often times
    * used together
    */
    circle.on('mouseup touchend', function() {
      writeMessage('Mouseup or touchend');
    });
    layer.add(circle);
    layer.add(text);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html>