title: 禁用 Perfect Drawing
---
在某些情况下，直接在canvas画布上绘图出现意外的结果。
例如，我们绘制一个形状, 并且同时设置了填充, 描边和透明度. 由于描边在填充的上面绘制,因此描边和填充交叉的部分, 会出现一条颜色加深的细线.

这可能这不是你所期望的, 所以KonvaJS使用缓冲区画布来修复了这种行为。

在这种情况下KonvaJS是这样做的：

1. 在缓冲区画布上绘制形状
2. 在没有设置透明度的情况下, 绘制描边和填充
3. 将透明度设置到图层上
4. 将缓冲区画布上绘制好的形状绘制到当前画布上

但是使用缓冲区画布可能会降低性能。你可以使用下面的代码来禁用它：

```javascript
shape.perfectDrawEnabled(false);
```

看看有什么区别:

{% iframe /downloads/code/performance/Disable_Perfect_Draw.html %}

{% include_code Konva Disable Perfect Drawing Demo performance/Disable_Perfect_Draw.html %}
