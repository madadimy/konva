title: 形状重绘
---

通常当你需要更新画布时你应该调用`layer.draw()` 方法。

但在个别情况下，我们也可以通过调用`shape.draw()` 来只更新某个`Konva.Node`而不用更新整个层。
*但请千万记住，在这种情况下，形状将被绘制在当前的画布上。
因此，如果节点位于在其他节点下面或者设置了透明度，就不能使用这种方法了。*

说明：鼠标悬停到的方框会变成高亮状态。

{% iframe /downloads/code/performance/Shape_Redraw.html %}

{% include_code Konva Shape Redraw Demo performance/Shape_Redraw.html %}
