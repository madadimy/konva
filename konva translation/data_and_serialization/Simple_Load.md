title: 从 JSON 字符串加载简单舞台
---
要使用Konva反序列化一个JSON字符串，我们可以使用`Konva.Node.create()`方法，它可以解析JSON字符串并创建节点。 如果我们想反序列化一个舞台节点，我们还可以传入一个可选的`container`参数。

{% iframe /downloads/code/data_and_serialization/Simple_Load.html %}

{% include_code Konva Simple Load Demo data_and_serialization/Simple_Load.html %}
