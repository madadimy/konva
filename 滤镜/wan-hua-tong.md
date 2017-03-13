要使用滤镜在`Konva.Image`我们必须首先使用`cache（）`函数
然后使用滤镜在`filter（）`函数。    

要使用`Konva`创建万花筒，我们可以使用`Konva.Filters.Kaleidoscope`
滤镜并设置`kaleidoscopePower`和`kaleidoscopeAngle`属性。 

查看所有可用的滤镜，请查看[滤镜](https://konvajs.github.io/api/Konva.Filters.html)文档。    

![](images/kaleidoscope.png)  

说明：滑动控制以调整万花筒角度。
Konva Kaleidoscope Image Demo [点击查看](https://konvajs.github.io/downloads/code/filters/Kaleidoscope.html)  


    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Kaleidoscope Image Demo</title>
    <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #F0F0F0;
    }
    #slider {
      position: absolute;
      top: 20px;
      left: 20px; 
    }
    </style>
    </head>
    <body>
    <div id="container"></div>
    <input id="slider" type="range" min="0" max="360" step="5" value="20">
    <script>
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
      var stage = new Konva.Stage({
        container: 'container',
        width: 300,
        height: 200
      });
      var layer = new Konva.Layer();
      var lion = new Konva.Image({
        image: images.lion,
        x: 80,
        y: 30,
        draggable: true
      });
      lion.cache();
      lion.filters([Konva.Filters.Kaleidoscope]);
      lion.kaleidoscopePower(3);
      layer.add(lion);
      stage.add(layer);
      var slider = document.getElementById('slider'); 
      slider.onchange = function() {
        lion.kaleidoscopeAngle(slider.value);
        layer.batchDraw();    
      };
    }
    var sources = {
      lion: '/assets/lion.png'
    };
    loadImages(sources, buildStage);
    </script>
    </body>
    </html>