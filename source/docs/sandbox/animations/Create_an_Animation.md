title: Konva 自定义动画
---

要使用Konva创建自定义动画，我们可以使用`Konva.Animation`构造函数, 这个函数接受两个参数，包括一个必需的动画函数和
一个可选的图层或图层数组，通过参数指定的图层将随每个动画帧更新。 动画函数中传递了一个`frame`对象，它拥有一个`time`属性，表示
动画已经运行的毫秒数， 一个`timeDiff`属性, 表示自最后一帧以来经过的毫秒数，以及一个`frameRate`属性，表示每秒显示的帧数。

动画函数中不需要重绘舞台或图层，因为Konva的动画引擎将智能地为我们处理。
动画函数中只需要包含在动画中要更新的节点属性，例如`position`, `rotation`, `scale`, `width`, `height`, `radius`, `colors`等。
一旦动画被创建，我们可以随时使用`start()`方法启动它。

有关Konva.Animation的属性和方法的完整列表，请查看[Konva.Animation文档](https://konvajs.github.io/api/Konva.Animation.html)。


##HTML5 Canvas Konva Animation 模板

```
<script>
  var anim = new Konva.Animation(function(frame) {
    var time = frame.time,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;

    // update stuff
  }, layer);

  anim.start();
</script>
```
