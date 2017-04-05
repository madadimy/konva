title: 常用的简单缓动函数
---

要使用Konva创建一个非线性缓动的tween动画，我们可以将它的`easing`属性设置为其他类型的缓动函数。 除了`Konva.Easings.Linear`，其他常用的缓动函数有`Konva.Easings.EaseIn`,
`Konva.Easings.EaseInOut`, 和 `Konva.Easings.EaseOut`。


本教程演示了Konva提供的所有缓动函数集，包括Linear, Ease, Back, Elastic, Bounce, and Strong.。

有关所有可用的缓动函数，请访问[Easings 文档](https://konvajs.github.io/api/Konva.Easing.html)。

说明：鼠标悬浮或者直接触摸下面的盒子, 它们会分别以不同的缓动函数做动画

{% iframe /downloads/code/tweens/Common_Easing.html %}

{% include_code Konva Simple Easings Demo tweens/Common_Easing.html %}
