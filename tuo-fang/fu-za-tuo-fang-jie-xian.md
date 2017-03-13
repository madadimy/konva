要使用`Konva`限制节点在区域内的被拖放运动，我们可以使用`dragBoundFunc`属性来定义边界,
节点不能交叉。 

![](images/complex-drag.png)

说明：拖放浅蓝色矩形并观察它
在y = 50的虚拟边界下面。拖放黄色
矩形并观察它被绑定在一个假想圆内。  


Konva Complex Drag and Drop Bounds Demo[点击查看](https://konvajs.github.io/downloads/code/drag_and_drop/Complex_Drag_and_Drop.html) 


    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Complex Drag and Drop Bounds Demo</title>
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
    // bound below y=50
    var blueGroup = new Konva.Group({
        x: 30,
        y: 70,
        draggable: true,
        dragBoundFunc: function(pos) {
            var newY = pos.y < 50 ? 50 : pos.y;
            return {
                x: pos.x,
                y: newY
            };
        }
    });
    // bound inside a circle
    var yellowGroup = new Konva.Group({
        x: stage.getWidth() / 2,
        y: 70,
        draggable: true,
        dragBoundFunc: function(pos) {
            var x = stage.getWidth() / 2;
            var y = 70;
            var radius = 50;
            var scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
            if(scale < 1)
                return {
                    y: Math.round((pos.y - y) * scale + y),
                    x: Math.round((pos.x - x) * scale + x)
                };
            else
                return pos;
        }
    });
    var blueText = new Konva.Text({
        fontSize: 26,
        fontFamily: 'Calibri',
        text: 'bound below',
        fill: 'black',
        padding: 10
    });
    var blueRect = new Konva.Rect({
        width: blueText.getWidth(),
        height: blueText.getHeight(),
        fill: '#aaf',
        stroke: 'black',
        strokeWidth: 4
    });
    var yellowText = new Konva.Text({
        fontSize: 26,
        fontFamily: 'Calibri',
        text: 'bound in circle',
        fill: 'black',
        padding: 10
    });
    var yellowRect = new Konva.Rect({
        width: yellowText.getWidth(),
        height: yellowText.getHeight(),
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 4
    });
    blueGroup.add(blueRect).add(blueText);
    yellowGroup.add(yellowRect).add(yellowText);
    layer.add(blueGroup);
    layer.add(yellowGroup);
    // add the layer to the stage
    stage.add(layer);
    </script>
    </body>
    </html>