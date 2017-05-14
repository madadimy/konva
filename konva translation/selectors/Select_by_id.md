title: 通过 id 属性选择形状
---

要使用Konva通过id属性来选择形状，我们可以使用`find()`方法来搜索带有特定id属性的元素。
`find()`方法总是返回一个元素数组，即使我们期望它只返回一个元素。
如果你只需要一个元素，你可以使用`findOne()`方法。
`find()`方法适用于任何节点，包括舞台，图层，组和形状。

说明：按下“激活矩形”按钮，通过id选择矩形并执行过渡动画。 您也可以拖拽矩形。

{% iframe /downloads/code/selectors/Select_by_id.html %}

{% include_code Konva Select Shape by id Demo selectors/Select_by_id.html %}