使用`Konva`为了限制拖放的形状的移动，
我们可以使用`dragBoundsFunc`属性，这是一个用户定义的函数。  
 这个函数可以用来约束
在各种方向的拖放运动，如约束运动
水平地，垂直地，对角地或径向地，或甚至约束节点
保持在盒子，圆圈或任何其他路径的内部。 

![](images/simple-drag.png)

说明：拖放水平文本，并观察它只能
水平移动。 拖放垂直文本，并观察它只能垂直移动。 


Konva Simple Drag Bounds Demo [点击查看](https://konvajs.github.io/downloads/code/drag_and_drop/Simple_Drag_Bounds.html) 


    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Simple Drag Bounds Demo</title>
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
    var rectHeight = 50;
    var rectWidth = 100;
    var rectY = (stage.getHeight() - rectHeight) / 2;
    var hbox = new Konva.Text({
        x: 20,
        y: 70,
        fontSize: 24,
        fontFamily: 'Calibri',
        text: 'horizontal',
        fill: 'black',
        padding: 15,
        draggable: true,
        dragBoundFunc: function(pos) {
            return {
                x: pos.x,
                y: this.getAbsolutePosition().y
            }
        }
    });
    var vbox = new Konva.Text({
        x: 150,
        y: 70,
        draggable: true,
        fontSize: 24,
        fontFamily: 'Calibri',
        text: 'vertical',
        fill: 'black',
        padding: 15,
        draggable: true,
        dragBoundFunc: function(pos) {
            return {
                x: this.getAbsolutePosition().x,
                y: pos.y
            }
        }
    });
    layer.add(hbox);
    layer.add(vbox);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html>