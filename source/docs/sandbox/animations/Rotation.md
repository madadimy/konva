title: Konva 自定义旋转动画
---

要使用Konva为形状创建旋转动画，我们可以使用`Konva.Animation`创建一个新的动画, 并在每个动画帧中修改形状的旋转角度.

在本教程中，我们将围绕左上角旋转一个蓝色矩形，围绕其自身中心点旋转一个黄色矩形，以及围绕一个外部点旋转一个红色矩形。

有关Konva.Animation的属性和方法的完整列表，请查看[Konva.Animation文档](https://konvajs.github.io/api/Konva.Animation.html)。

{% iframe /downloads/code/animations/Rotation.html %}

{% include_code Konva Rotation Animation Demo animations/Rotation.html %}