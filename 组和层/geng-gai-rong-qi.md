要使用`Konva`将图形从一个容器移动到另一个容器，我们可以使用
`moveTo（）`方法，它需要一个容器作为参数。   


容器可以是其他舞台，层或组。 您还可以移动组
进入其他组和层，或者把组的形状直接移入其他层里。 



说明：拖放组并观察红色矩形是结合到黄色组还是蓝色组。
 使用左侧的按钮将红色矩形从一个组移动到另一个组。

Konva Move Shape to Another Container Demo[点击查看](https://konvajs.github.io/downloads/code/groups_and_layers/Change_Containers.html) 


    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Move Shape to Another Container Demo</title>
    <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #F0F0F0;
    }
    #buttons {
        position: absolute;
        left: 10px;
        top: 0;
    }
    button {
        margin-top: 10px;
        display: block;
    }
    </style>
    </head>
    <body>
    <div id="container"></div>
    <div id="buttons">
      <button id="toBlue">
          Move red box to blue group
      </button>
      <button id="toYellow">
          Move red box to yellow group
      </button>
    </div>
    <script>
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    var stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height
    });
    var layer = new Konva.Layer();
    var yellowGroup = new Konva.Group({
        x: 100,
        y: 100,
        draggable: true
    });
    var blueGroup = new Konva.Group({
        x: 300,
        y: 80,
        draggable: true
    });
    var box = new Konva.Rect({
        x: 10,
        y: 10,
        width: 100,
        height: 50,
        fill: 'red',
        stroke: 'black'
    });
    var yellowCircle = new Konva.Circle({
        x: 0,
        y: 0,
        radius: 50,
        fill: 'yellow',
        stroke: 'black'
    });
    var blueCircle = new Konva.Circle({
        x: 0,
        y: 0,
        radius: 50,
        fill: 'blue',
        stroke: 'black'
    });
    // build node tree
    yellowGroup.add(yellowCircle);
    yellowGroup.add(box);
    blueGroup.add(blueCircle);
    layer.add(yellowGroup);
    layer.add(blueGroup);
    stage.add(layer);
    // add button event bindings
    document.getElementById('toBlue').addEventListener('click', function() {
        box.moveTo(blueGroup);
        layer.draw();
    }, false);
    document.getElementById('toYellow').addEventListener('click', function() {
        box.moveTo(yellowGroup);
        layer.draw();
    }, false);
    </script>
    </body>
    </html>