所有事件都从图形开始。 因此，如果您点击画布上的空白空间，点击事件将不会触发图层，甚至没有触发阶段对象。 但是如果你真的需要监控在`Konva.Stage`上空的空间点击（或任何其他类似的事件），你可以： 

1. 创建与`Stage`相同大小的透明矩形，并添加到形状的底部  
2. 或特意监听`content`事件。
  支持的`content`事件：  
`contentMouseover`，`contentMousemove`，`contentMouseout`，   `contentMousedown`，`contentMouseup`，      
`contentClick`，`contentDblclick`，  `contentTouchstart`，`contentTouchmove`，`contentTouchend`，  
`contentTap`，`contentDblTap`.  

![](images/stage-events.png) 


Konva Stage Events Demo  [点击查看](https://konvajs.github.io/downloads/code/events/Stage_Events.html)  
说明:点击任何地方,然后查看控制台. 


    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Stage Events Demo</title>
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
    // add the layer to the stage
    stage.add(layer);
    var circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      fill: 'blue',
      radius: 30
    });
    layer.add(circle).draw();
    // don't trigger on empty space
    stage.on('click', function() {
      console.log('usual click on ' + JSON.stringify(stage.getPointerPosition()));
    });
    // trigger every where
    stage.on('contentClick', function() {
      console.log('content click on ' + JSON.stringify(stage.getPointerPosition()));
    });
    </script>
    </body>
    </html>