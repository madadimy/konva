title: 禁用 Listening Shapes
---


您可以通过给形状设置`listening(false)`来将其从命中检测区域中移除, 这样可以提高性能. 在某些情况下, 这个方法会非常有用, 并且不会破坏整个应用的逻辑.

例如，我们有一个包含矩形和文本的按钮（组）。 我们需要监听按钮点击。
在这种情况下，我们可以从命中捡测区域中移除文本，只监听在矩形上面的点击操作。

{% iframe /downloads/code/performance/Listening_False.html %}

{% include_code Konva Disable Listening Shapes Demo performance/Listening_False.html %}
