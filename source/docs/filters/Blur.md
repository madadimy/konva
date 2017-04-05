title: HTML5 Canvas 模糊图形滤镜
---
要使用滤镜在`Konva.Image`我们必须首先使用`cache（）`函数
然后使用滤镜在`filter（）`函数。    

要使用`Konva`模糊图像，我们可以使用`Konva.Filters.Blur`滤镜
并使用`blurRadius`属性设置模糊量。 

查看所有可用的滤镜，请查看[滤镜](https://konvajs.github.io/api/Konva.Filters.html)文档。     




说明：滑动控制以调整模糊半径。 

{% iframe /downloads/code/filters/Blur.html %}

{% include_code Konva Blur Image Demo filters/Blur.html %}