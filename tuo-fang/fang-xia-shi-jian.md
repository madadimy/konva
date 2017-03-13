`Konva`默认不支持drop(放下)事件。 但是你可以编写自己的`drop`事件检测。要检测拖放目标形状，您必须将拖动对象移动到另一个图层中。  
 

![](images/drop-events.png)  
在这个例子中，你可以看到`drop`,`dragenter`，`dragleave`，`dragover`的事件。  
说明：将一个形状拖动到另一个形状上。 或将一个形状拖放到另一个形状下。   
Konva Drop Events Demo [点击查看](https://konvajs.github.io/downloads/code/drag_and_drop/Drop_Events.html) 



    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Drop Events Demo</title>
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
    stage.add(layer);
    var tempLayer = new Konva.Layer();
    stage.add(tempLayer);
    var text = new Konva.Text({
        fill : 'black'
    });
    layer.add(text);
    var star;
    for (var i = 0; i < 10; i++) {
        star = new Konva.Star({
            x : stage.width() * Math.random(),
            y : stage.height() * Math.random(),
            fill : "blue",
            numPoints :10,
            innerRadius : 20,
            outerRadius : 25,
            draggable: true,
            name : 'star ' + i,
            shadowOffsetX : 5,
            shadowOffsetY : 5
        });
        layer.add(star);
    }
    layer.draw();
    stage.on("dragstart", function(e){
        e.target.moveTo(tempLayer);
        text.text('Moving ' + e.target.name());
        layer.draw();
    });
    var previousShape;
    stage.on("dragmove", function(evt){
        var pos = stage.getPointerPosition();
        var shape = layer.getIntersection(pos);
        if (previousShape && shape) {
            if (previousShape !== shape) {
                // leave from old targer
                previousShape.fire('dragleave', {
                    type : 'dragleave',
                    target : previousShape,
                    evt : evt.evt
                }, true);
                // enter new targer
                shape.fire('dragenter', {
                    type : 'dragenter',
                    target : shape,
                    evt : evt.evt
                }, true);
                previousShape = shape;
            } else {
                previousShape.fire('dragover', {
                    type : 'dragover',
                    target : previousShape,
                    evt : evt.evt
                }, true);
            }
        } else if (!previousShape && shape) {
            previousShape = shape;
            shape.fire('dragenter', {
                type : 'dragenter',
                target : shape,
                evt : evt.evt
            }, true);
        } else if (previousShape && !shape) {
            previousShape.fire('dragleave', {
                type : 'dragleave',
                target : previousShape,
                evt : evt.evt
            }, true);
            previousShape = undefined;
        }
    });
    stage.on("dragend", function(e){
        var pos = stage.getPointerPosition();
        var shape = layer.getIntersection(pos);
        if (shape) {
            previousShape.fire('drop', {
                type : 'drop',
                target : previousShape,
                evt : e.evt
            }, true);
        }
        previousShape = undefined;
        e.target.moveTo(layer);
        layer.draw();
        tempLayer.draw();
    });
    stage.on("dragenter", function(e){
        e.target.fill('green');
        text.text('dragenter ' + e.target.name());
        layer.draw();
    });
    stage.on("dragleave", function(e){
        e.target.fill('blue');
        text.text('dragleave ' + e.target.name());
        layer.draw();
    });
    stage.on("dragover", function(e){
        text.text('dragover ' + e.target.name());
        layer.draw();
    });
    stage.on("drop", function(e){
        e.target.fill('red');
        text.text('drop ' + e.target.name());
        layer.draw();
    });
    </script>
    </body>
    </html>








