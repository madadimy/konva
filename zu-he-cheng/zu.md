用`Konva`要将多个形状一起分组，我们可以实例化
一个`Konva.Group（）`对象，然后使用`add（）`方法向它添加图形。
当我们想要一起转换多个形状时，将形状组合在一起真的很方便。 如果我们想立刻平移，旋转或缩放多个形状。组也可以添加到其他组来创建更复杂
节点树。 有关属性和方法的完整列表，请参阅[Konva.Group](https://konvajs.github.io/api/Konva.Group.html)文档. 

![](images/groups.png)  


Konva Groups Demo [点击查看](https://konvajs.github.io/downloads/code/groups_and_layers/Groups.html)  


    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/ konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Groups Demo</title>
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
    /*
    * create a group which will be used to combine
    * multiple simple shapes.  Transforming the group will
    * transform all of the simple shapes together as
    * one unit
    */
    var group = new Konva.Group({
        x: 120,
        y: 40,
        rotation: 20
    });
    var colors = ['red', 'orange', 'yellow'];
    for(var i = 0; i < 3; i++) {
        var box = new Konva.Rect({
            x: i * 30,
            y: i * 18,
            width: 100,
            height: 50,
            name: colors[i],
            fill: colors[i],
            stroke: 'black',
            strokeWidth: 4
        });
        group.add(box);
    }
    layer.add(group);
    stage.add(layer);
    </script>
    </body>
    </html>
