title: 将舞台保存为 JSON 字符串
---

要使用Konva将舞台保存为JSON字符串，我们可以使用`toJSON()`方法, 将Konva节点树序列化为可以在网络存储中或在离线数据库中保存的文本。 我们还可以序列化其他的节点，包括图层，组和形状。

{% iframe /downloads/code/data_and_serialization/Serialize_a_Stage.html %}

{% include_code Konva Save Stage Demo data_and_serialization/Serialize_a_Stage.html %}
