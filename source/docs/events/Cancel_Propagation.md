title: HTML5 Canvas Konva 阻止冒泡
---
要使用`Konva`阻止冒泡，我们可以设置`cancelBubble`对象的属性设置为`true`。 




说明：点击圆形可以观察到只有圆形事件绑定被触发,
因为事件传播在触发循环事件时被取消，防止事件对象向上冒泡。 

{% iframe /downloads/code/events/Cancel_Propagation.html %}

{% include_code Konva Cancel_Propagation Demo events/Cancel_Propagation.html %}
