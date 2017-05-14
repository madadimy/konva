title: 防止内存泄漏
---

### 删除形状

Konva中有两个非常接近的方法 `remove()` 和 `destroy()` 。 如果你想彻底地删除节点，你需要使用 `destroy()` 方法。
如果你将来需要重用节点，你应该使用 `remove()` 方法，然后在需要的时候将其再次添加到任何容器。
不要在 `destroy()`操作之后重用节点, 因为 `destroy()` 会从KonvaJS引擎中删除对节点的所有引用。

### Tween动画

当你使用 `Konva.Tween` 实例来创建动画时，你必须在使用后销毁它。

```javascript
var tween = new Konva.Tween({
    node : circle,
    x : 0,
    duration : 0.5,
    onFinish : function() {
        // remove all references from Konva
        tween.destroy();
    }
});
tween.play();
```

或者如果你不需要重用tween实例, 你可以使用更为简单的 `to()` 方法来创建动画:

```javascript
// tween will be automatically started and destroyed on finish
circle.to({
    x : 0,
    duration : 0.5
});
```
