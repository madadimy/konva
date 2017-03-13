#使用`Konva`的HTML5 Canvas 图片事件  

为了仅使用`Konva`检测图像中非透明像素的事件，我们可以使用`drawHitFromCache（）`方法生成更精确的图像命中区域。  
默认情况下，即使图片内部的像素透明，也可以触发事件。 `drawHitFromCache（）`方法还接受一个可选的回调函数，以便在创建图像匹配区域时执行。  
注意：`drawHitFromCache（）`方法要求图像托管在与执行它的代码相同域的Web服务器上。  
 ![](images/image.png)
说明：将鼠标放在猴子和狮子上，观察mouseover事件绑定。 请注意，如果您将鼠标悬停在图片的任何部分（包括透明像素）上，则会为猴子触发事件。 因为我们为狮子创建了图像命中区域，所以忽略透明像素，这使得能够进行更精确的事件检测。     
Konva Image_Events Demo[点击查看](https://konvajs.github.io/downloads/code/events/Image_Events.html)  


    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Image Events Demo</title>
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
    function loadImages(sources, callback) {
      var images = {};
      var loadedImages = 0;
      var numImages = 0;
      for(var src in sources) {
        numImages++;
      }
      for(var src in sources) {
        images[src] = new Image();
        images[src].onload = function() {
          if(++loadedImages >= numImages) {
            callback(images);
          }
        };
        images[src].src = sources[src];
      }
    }
    function buildStage(images) {
      var monkey = new Konva.Image({
        image: images.monkey,
        x: 120,
        y: 50
      });
      var lion = new Konva.Image({
        image: images.lion,
        x: 280,
        y: 30
      });
      monkey.on('mouseover', function() {
        writeMessage('mouseover monkey');
      });
      monkey.on('mouseout', function() {
        writeMessage('');
      });
      lion.on('mouseover', function() {
        writeMessage('mouseover lion');
      });
      lion.on('mouseout', function() {
        writeMessage('');
      });
      lion.cache();
      lion.drawHitFromCache();
      layer.add(monkey);
      layer.add(lion);
      layer.add(text);
      stage.add(layer);
    }
    var stage = new Konva.Stage({
      container: 'container',
      width: 578,
      height: 200
    });
    var layer = new Konva.Layer();
    var text = new Konva.Text({
      x: 10,
      y: 10,
      fontFamily: 'Calibri',
      fontSize: 24,
      text: '',
      fill: 'black'
    });
    var sources = {
      lion: '/assets/lion.png',
      monkey: '/assets/monkey.png'
    };
    loadImages(sources, buildStage);
    </script>
    </body>
    </html>