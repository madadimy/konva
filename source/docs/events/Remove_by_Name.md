title: HTML5 Canvas 通过名称删除事件监听
---

##使用`Konva`通过名称删除事件监听  


我们可以使用`on（）`方法添加命名空间的事件类型，以便我们以后
使用`off（）`方法通过相同的命名空间删除事件监听器。  



说明：点击圆形可查看两个不同的`onclick`绑定的弹窗。  
 使用按钮删除事件监听器再次单击圆形观察新的oncli



{% iframe /downloads/code/events/Remove_by_Name.html %}

{% include_code Konva Remove By Name Demo events/Remove_by_Name.html %}
