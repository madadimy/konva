title: HTML5 Canvas 简单的拖动界限教程
---
使用`Konva`为了限制拖放的形状的移动，
我们可以使用`dragBoundsFunc`属性，这是一个用户定义的函数。  
 这个函数可以用来约束
在各种方向的拖放运动，如约束运动
水平地，垂直地，对角地或径向地，或甚至约束节点
保持在盒子，圆圈或任何其他路径的内部。 


说明：拖放水平文本，并观察它只能
水平移动。 拖放垂直文本，并观察它只能垂直移动。 


{% iframe /downloads/code/drag_and_drop/Simple_Drag_Bounds.html %}

{% include_code Konva Simple Drag Bounds Demo drag_and_drop/Simple_Drag_Bounds.html %}