要使用滤镜在`Konva.Image`我们必须首先使用`cache（）`函数
然后使用滤镜在`filter（）`函数。  

要使用`Konva`反转图像的颜色，我们可以使用 `Konva.Filters.Invert`滤镜. 

查看所有可用的滤镜，请查看[滤镜](https://konvajs.github.io/api/Konva.Filters.html)文档。 

![](images/invert.png)  


Konva Invert Image Demo [点击查看](https://konvajs.github.io/downloads/code/filters/Invert.html)  

    <!DOCTYPE html>
    <html>
    <head>
    <script src="https://cdn.rawgit.com/konvajs/konva/1.4.0/konva.min.js"></script>
    <meta charset="utf-8">
    <title>Konva Invert Image Demo</title>
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
      lion.filters([Konva.Filters.Invert]);
      layer.add(lion);
      stage.add(layer);
    }
    var sources = {
      lion: '/assets/lion.png'
    };
    loadImages(sources, buildStage);
    </script>
    </body>
    </html>