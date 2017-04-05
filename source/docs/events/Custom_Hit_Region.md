title: HTML5 Canvas 自定义命中检测
---
要为使用Konva的形状创建自定义命中空间函数，我们可以设置
`drawHitFunc`属性。 命中空间函数是`Konva`的内置函数
将使用在用于命中检测的区域。   
使用自定义命中
函数可以有几个好处，如使命中区域更大
使得用户更容易与形状进行交互，从而形成一些部分
的图形可检测区域和其大小不一致，且简化命中绘制功能
以提高渲染性能。  

说明：鼠标经过，离开，按下和弹起在星图和
观察到击中区域,是包围该形状的更大尺寸的圆。  

{% iframe /downloads/code/events/Custom_Hit_Region.html %}

{% include_code Konva Custom_Hit_Region Demo events/Custom_Hit_Region.html %}
