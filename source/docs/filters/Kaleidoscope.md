title: HTML5 Canvas 万花筒
---

要使用滤镜在`Konva.Image`我们必须首先使用`cache（）`函数
然后使用滤镜在`filter（）`函数。    

要使用`Konva`创建万花筒，我们可以使用`Konva.Filters.Kaleidoscope`
滤镜并设置`kaleidoscopePower`和`kaleidoscopeAngle`属性。 

查看所有可用的滤镜，请查看[滤镜](https://konvajs.github.io/api/Konva.Filters.html)文档。    



说明：滑动控制以调整万花筒角度。  
{% iframe /downloads/code/filters/Kaleidoscope.html %}

{% include_code Konva Kaleidoscope Image Demo filters/Kaleidoscope.html %}