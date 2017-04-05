title: HTML5 Canvas 图片反色滤镜
---

要使用滤镜在`Konva.Image`我们必须首先使用`cache（）`函数
然后使用滤镜在`filter（）`函数。  

要使用`Konva`反转图像的颜色，我们可以使用 `Konva.Filters.Invert`滤镜. 

查看所有可用的滤镜，请查看[滤镜文档](https://konvajs.github.io/api/Konva.Filters.html)。 





{% iframe /downloads/code/filters/Invert.html %}

{% include_code Konva Invert Image Demo filters/Invert.html %}