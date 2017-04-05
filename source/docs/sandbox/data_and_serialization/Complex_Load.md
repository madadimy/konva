title: 从 JSON 字符串加载复杂舞台
---
要使用Konva加载一个包含图片和事件绑定的复杂舞台，我们需要先使用`Konva.Node.create()`创建一个舞台节点，然后通过`get()`方法, 结合选择器, 手动的添加图片和事件操作. 图片和事件操作必须手动地进行设置, 因为它们是无法被序列化的.

{% iframe /downloads/code/data_and_serialization/Complex_Load.html %}

{% include_code Konva Load Complex Stage Demo data_and_serialization/Complex_Load.html %}
