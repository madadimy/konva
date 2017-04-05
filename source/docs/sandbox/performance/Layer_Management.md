title: 图层管理优化
---
当创建Konva应用程序时，在性能方面最需要的考虑就是层的管理. 让Konva从其他画布库中脱颖而出的一大特点就是, 它使我们能够创建单独的层，每个层都有自己对应的画布元素。这意味着我们可以只动画，转换或更新舞台上的一部分元素，同时不需要重新绘制舞台上其他的元素。如果我们检查一个Konva舞台的DOM结构，我们将看到实际上每一个层都有一个对应的画布元素.
本教程有两个图层，一个是动画图层，另一个是包含文本的静态图层。 由于在动画中不需要重绘文本, 所以可以把它放置在一个单独的图层中.

下面的示例中有两个层, 一个是动画层, 一个是包含文本的静态层. 由于文本上没有动画, 不需要被连续地重绘, 因此被放在一个单独的层里.


{% iframe /downloads/code/performance/Layer_Management.html %}

{% include_code Konva Layer Management Demo performance/Layer_Management.html %}
