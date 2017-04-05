title: Tween 动画
---

要使用Konva在不同的属性值之间做动画，我们可以先实例化一个`Konva.Tween`对象. 然后调用`play()`方法启动它。无论是`Shape`,
`Group`, `Layer`, 还是`Stage`, 它们的任何数值型的属性都可以通过这种方式添加过渡动画, 比如`x`, `y`, `rotation`,
`width`, `height`, `radius`, `strokeWidth`, `opacity`, `scaleX`, `offsetX`等

有关Konva.Tween的属性和方法的完整列表，请查看
[Konva.Tween 文档](https://konvajs.github.io/api/Konva.Tween.html)。

{% iframe /downloads/code/tweens/Linear_Easing.html %}

{% include_code Konva Tweening Demo tweens/Linear_Easing.html %}
