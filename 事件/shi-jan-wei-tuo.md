使用`Konva`获取事件目标，我们可以访问target属性
的Event对象。 这在使用事件委托时特别有用，
其中我们可以将事件处理程序绑定到父节点，并监听
发生在它的孩子上的事件。   

![](images/event-delegation.png) 


说明：点击星形并观察层的事件绑定能正确标识所点击的形状。 

Konva Event_Delegation Demo  [点击查看](https://konvajs.github.io/downloads/code/events/Event_Delegation.html) 


    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Event Delegation Demo</title>
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
    var star = new Konva.Star({
      x: stage.getWidth() / 2,
      y: stage.getHeight() / 2,
      numPoints: 15,
      innerRadius: 40,
      outerRadius: 70,
      fill: 'blue',
      scale: {
        x: 2,
        y: 0.5
      },
      name: 'my star'
    });
    layer.on('click', function(evt) {
      // get the shape that was clicked on
      var shape = evt.target;
      alert('you clicked on \"' + shape.getName() + '\"');
    });
    layer.add(star);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html>