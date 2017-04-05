title: 通过 name 属性选择形状
---

要使用Konva通过name属性选择形状，我们可以使用`find()`方法。
`find()`方法返回一个与`.`选择器字符串匹配的节点数组。
这个返回数组是一个`Konva.Collection`数组，也是一个典型的JavaScript数组，有一个特殊的`each()`方法。
这个`each()`方法使我们能够快速遍历数组中的每个节点。

{% iframe /downloads/code/selectors/Select_by_Name.html %}

{% include_code Konva Select Shape by Name Demo selectors/Select_by_Name.html %}