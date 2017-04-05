title: HTML5 Canvas 设置监听事件
---
使用`Konva`设置监听事件,我们可以设置是否监听
当对象被实例化时，配置对象的属性为`true`或`false`，
或者我们可以使用`setListening（）`方法设置`listen`属性。
一旦我们为一个或多个节点设置了侦听属性，我们也需要
使用`drawHit（）`方法重绘每个受影响图层的命中图。  

说明：鼠标经过椭圆形以观察事件监听未执行。
单击“Listen”开始监听事件，并观察事件处理程序现在是否被执行。  

{% iframe /downloads/code/events/Listen_for_Events.html %}

{% include_code Konva Listen_for_Events Demo events/Listen_for_Events.html %}
