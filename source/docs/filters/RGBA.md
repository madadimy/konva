title: HTML5 Canvas RGBA 图片滤镜
---
要使用滤镜在`Konva.Image`我们必须首先使用`cache（）`函数
然后使用滤镜在`filter（）`函数。  

要使用`Konva`更改图像的rgba组合，我们可以使用`Konva.Filters.RGBA`。  
查看所有可用的滤镜，请查看[滤镜](https://konvajs.github.io/api/Konva.Filters.html)文档。  

说明：滑动控件以更改rgba值。 

For all available filters go to [Filters Documentation](https://konvajs.github.io/api/Konva.Filters.html).

{% iframe /downloads/code/filters/RGBA.html %}

{% include_code Konva RGBA Image Demo filters/RGBA.html %}