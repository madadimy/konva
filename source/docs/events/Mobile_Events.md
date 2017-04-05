title: HTML5 Canvas 手机触摸事件教程
---
要使用`Konva`将事件处理程序绑定到移动设备上的形状，我们可以使用`on（）`方法.      
  
使用`on（）`方法需要事件类型和回调函数 .   
`Konva` 支持  `touchstart`，`touchmove`，`touchend`，`tap`，`dbltap`，`dragstart`，`dragmove`和`dragend`移动事件。 



注意：此示例仅适用于iOS和Android移动设备，因为它使用触摸事件而不是鼠标事件。  

说明：将手指移动到三角形上以查看触摸坐标，然后开始触摸、结束触摸圆形。


{% iframe /downloads/code/events/Mobile_Events.html %}

{% include_code Konva Mobile_Events Demo events/Mobile_Events.html %}
