title: HTML5 Canvas drop(放下)事件。
---
`Konva`默认不支持drop(放下)事件。 但是你可以编写自己的`drop`事件检测。要检测拖放目标形状，您必须将拖动对象移动到另一个图层中。  
 
在这个例子中，你可以看到`drop`,`dragenter`，`dragleave`，`dragover`的事件。  
说明：将一个形状拖动到另一个形状上。 或将一个形状拖放到另一个形状下。   

{% iframe /downloads/code/drag_and_drop/Drop_Events.html %}

{% include_code Konva Drop Events Demo drag_and_drop/Drop_Events.html %}