title: 使用 Batch Draw 处理重绘
---

在某些情况下，我们可能希望既不造成过多的重绘, 并且尽可能快地更新Konva形状.例如，如果我们要在mousemove事件中更新舞台上某个元素的状态, 我们并不愿意使用`draw()`方法来重绘图层, 因为mousemove事件可以在一秒内被触发成百上千次, 从而导致动画的帧率达到每秒一百多帧, 这样常常会使动画出现'跳跃', 毕竟浏览器处理重绘的能力是有限的.

对于这种情况，最好使用`batchDraw()`方法, 它会自动将重绘操作交给Konva动画引擎来处理。无论你调用`batchDraw()`多少次，Konva引擎都会根据浏览器每个时间点每秒所能处理的最大帧数自动限制图层每秒重绘的次数.

说明：将鼠标移到舞台上来快速旋转矩形

{% iframe /downloads/code/performance/BatchDraw.html %}

{% include_code Konva Batch Draw Demo performance/BatchDraw.html %}
