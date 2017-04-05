title: Konva 自定义缩放动画
---

要使用Konva为形状创建缩放动画，我们可以使用`Konva.Animation`创建一个新的动画, 并在每个动画帧中修改形状的缩放比例.

在本教程中，我们将缩放蓝色六边形的x和y分量，黄色六边形的y分量, 并让红色六边形相对于它的右侧边缩放。

说明：在六边形做动画的同时, 您也能拖拽它们

有关Konva.Animation的属性和方法的完整列表，请查看[Konva.Animation文档](https://konvajs.github.io/api/Konva.Animation.html)。


{% iframe /downloads/code/animations/Scaling.html %}

{% include_code Konva Scale Animation Demo animations/Scaling.html %}