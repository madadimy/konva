要使用`Konva`拖放舞台，我们在实例化舞台时可以设置`draggable`属性
，设置对象的值为`true`，或者我们可以使用`draggable（）`方法。 

与其他节点（例如形状，组和图层）的拖放不同，
我们可以通过拖动舞台的任何部分来拖动整个舞台。  

![](images/drag-stage.png)  


Konva Drag and Drop the Stage Demo[点击查看](https://konvajs.github.io/downloads/code/drag_and_drop/Drag_a_Stage.html)  



    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Drag and Drop the Stage Demo</title>
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
        height: height,
        draggable: true
    });
    var layer = new Konva.Layer();
    var circle = new Konva.Circle({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });
    // add the shape to the layer
    layer.add(circle);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html>