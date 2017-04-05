title: HTML5 Canvas 图片亮度滤镜
---
要使用滤镜在`Konva.Image`我们必须首先使用`cache（）`函数
然后使用滤镜在`filter（）`函数。  

要使用`Konva`使图片变亮或变暗，我们可以使用`Konva.Filters.Brighten`
滤镜并使用`brightness`属性设置亮度。   

亮度属性`brightness`可以设置为-1和1之间的任何整数。
负值使图像变暗，正值使图像变亮。 

查看所有可用的滤镜，请查看[滤镜](https://konvajs.github.io/api/Konva.Filters.html)文档。 


说明：滑动控制旋钮调整亮度  

{% iframe /downloads/code/filters/Brighten.html %}

{% include_code Konva Brighten Image Demo filters/Brighten.html %}