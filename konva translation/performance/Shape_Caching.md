title: 形状缓存
---

在绘制复杂的Konva图形时, 一种能显著提高绘制性能的方法是将它们缓存为图像。这可以通过使用`cache()`方法将节点转换为图像对象来实现。

下面这个特定的教程通过绘制了10个缓存的星星图片，而不是直接绘制10个独立的Konva星星形状, 使绘图性能得到了4倍的提升
缓存方法可以应用于任何节点，包括舞台，图层，组和形状。

注意：`cache()`方法要求图片必须托管在和执行绘制的代码文件相同域名的服务器上.

同样的，`cache()`函数不能自动检测节点的尺寸大小。所以你需要小心拥有阴影和描边的组和形状。
如果你遇到了意外的结果, 可以通过设置`x`, `y`, `width` 和 `height`来给`cache()`函数传递一个弹性的属性值.

{% iframe /downloads/code/performance/Shape_Caching.html %}

{% include_code Konva Shape Caching Demo performance/Shape_Caching.html %}
