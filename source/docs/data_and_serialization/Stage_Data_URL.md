title: 获取舞台的 Data URL
---

要获取Konva舞台的Data URL，我们可以使用`toDataURL()`方法和一个`Stage`的回调函数（对于其他节点不需要回调函数）。此外，我们还可以传递MIME类型的数据，例如image / jpeg, 和一个范围在0和1之间的图片质量值。我们还可以获取特定节点的Data URL，包括层，组和形状。

*注意：`toDataURL()`方法要求需要绘制的图形必须托管在和执行绘制的代码文件相同域名的服务器上。
如果不满足此条件，就会抛出SECURITY_ERR异常。*

说明：拖拽矩形，然后单击保存按钮以获取画布的data url，并在新窗口中打开生成的图片

{% iframe /downloads/code/data_and_serialization/Stage_Data_URL.html %}

{% include_code Konva Stage Data URL Demo data_and_serialization/Stage_Data_URL.html %}
