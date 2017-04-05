title: HTML5 Canvas 图形组
---
用`Konva`要将多个形状一起分组，我们可以实例化
一个`Konva.Group（）`对象，然后使用`add（）`方法向它添加图形。
当我们想要一起转换多个形状时，将形状组合在一起真的很方便。 如果我们想立刻平移，旋转或缩放多个形状。组也可以添加到其他组来创建更复杂
节点树。 有关属性和方法的完整列表，请参阅[Konva.Group](https://konvajs.github.io/api/Konva.Group.html)文档. 


{% iframe /downloads/code/groups_and_layers/Groups.html %}

{% include_code Konva Groups Demo groups_and_layers/Groups.html %}