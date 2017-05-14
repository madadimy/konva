title: 描边绘制优化
---
### 从命中检测中删除描边

如果您的图形同时拥有填充和非常小的描边, 您可以通过设置`shape.strokeHitEnabled(false)`将描边从命中检测区域中删除.
如果描边对于命中检测至关重要，请不要使用此属性。

### 禁用描边阴影

如果您真的不需要描边的阴影, 你可以设置`shape.shadowForStrokeEnabled(false)`。
请记住，如果您创建`Konva.Line`时没有设置填充属性，阴影也将会被禁用。


{% iframe /downloads/code/performance/Optimize_Strokes.html %}

{% include_code Konva Optimizing Strokes Demo performance/Optimize_Strokes.html %}
