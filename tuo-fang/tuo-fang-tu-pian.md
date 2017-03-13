使用`Konva`拖放图片，当我们实例化一个图片时可以设置`draggable`属性为`true`，  
或者我们可以使用`draggable（）`方法。`draggable（）`方法自动支持桌面应用和移动应用。  
![](images/drag-image.png) 

Konva Drag and Drop an Image Demo  [点击查看](https://konvajs.github.io/downloads/code/drag_and_drop/Drag_an_Image.html)   


    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Drag and Drop an Image Demo</title>
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
    function drawImage(imageObj) {
        var stage = new Konva.Stage({
            container: 'container',
            width: width,
            height: height
        });
        var layer = new Konva.Layer();
        // darth vader
        var darthVaderImg = new Konva.Image({
            image: imageObj,
            x: stage.getWidth() / 2 - 200 / 2,
            y: stage.getHeight() / 2 - 137 / 2,
            width: 200,
            height: 137,
            draggable: true
        });
        // add cursor styling
        darthVaderImg.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
        });
        darthVaderImg.on('mouseout', function() {
            document.body.style.cursor = 'default';
        });
        layer.add(darthVaderImg);
        stage.add(layer);
    }
    var imageObj = new Image();
    imageObj.onload = function() {
        drawImage(this);
    };
    imageObj.src = '/assets/darth-vader.jpg';
    </script>
    </body>
    </html>