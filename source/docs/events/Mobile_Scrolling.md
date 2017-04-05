title: HTML5 Canvas 手机滚动和本地事件
---
默认情况下，`Konva`将阻止所有指针与舞台交互的默认行为。
当您尝试在移动设备上拖放形状时，这将防止意外滚动页面。  

但在某些情况下，您可能希望保留浏览器事件的默认行为。 在这种情况下，您可以将形状的`preventDefault`属性设置为`false`。   

  
![](images/mobile-scrolling.png)

说明：如果您使用移动设备，请尝试按每个矩形滚动页面。  
绿色 - 应防止默认行为（无页面滚动）。  
红色 - 将保持默认行为（滚动工作）。  

{% iframe /downloads/code/events/Mobile_Scrolling.html %}

{% include_code Konva Mobile Scrolling Demo events/Mobile_Scrolling.html %}
