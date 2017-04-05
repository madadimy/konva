title: HTML5 Canvas 图片灰度滤镜
---

要使用滤镜在`Konva.Image`我们必须首先使用`cache（）`函数
然后使用滤镜在`filter（）`函数。  

要使用`Konva`反转图像的灰度，我们可以使用
`Konva.Filters.Grayscale`滤镜。

查看所有可用的滤镜，请查看[滤镜文档](https://konvajs.github.io/api/Konva.Filters.html)。  

{% iframe /downloads/code/filters/Grayscale.html %}

{% include_code Konva Grayscale Image Demo filters/Grayscale.html %}