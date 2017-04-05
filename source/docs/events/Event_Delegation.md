title: HTML5 Canvas Konva 事件委托
---

使用`Konva`获取事件目标，我们可以访问target属性
的Event对象。 这在使用事件委托时特别有用，
其中我们可以将事件处理程序绑定到父节点，并监听
发生在它的孩子上的事件。   




说明：点击星形并观察层的事件绑定能正确标识所点击的形状。 


{% iframe /downloads/code/events/Event_Delegation.html %}

{% include_code Konva Event_Delegation Demo events/Event_Delegation.html %}
