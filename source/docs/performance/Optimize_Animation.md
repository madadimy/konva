title: 动画优化
---

如果你动画中的某些帧没有发生更新（没有节点的状态发生更改），则可以在动画函数直接`return false`。

这样的话，Konva将不会更新图层。

{% iframe /downloads/code/performance/Optimize_Animation.html %}

{% include_code Konva Optimize Animation Demo performance/Optimize_Animation.html %}
