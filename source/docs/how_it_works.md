title: How It Works
---

Konva stages are made up of user defined layers.
Each layer has two canvas renderers, a scene renderer and a hit graph renderer.
The scene renderer is what you can see, and the hit graph renderer is a special hidden
canvas that's used for high performance event detection.

Each layer can contain shapes, groups of shapes, or groups of other groups.
The stage, layers, groups, and shapes are virtual nodes, similar to DOM nodes in an HTML page.
Here's an example Node hierarchy:

```
                   Stage
                     |
              +------+------+
              |             |
            Layer         Layer
              |             |
        +-----+-----+     Shape
        |           |
      Group       Group
        |           |
        +       +---+---+
        |       |       |
     Shape   Group    Shape
                |
                +
                |
              Shape
```

All nodes can be styled and transformed.  Although Konva has prebuilt shapes available,
such as rectangles, circles, images, sprites, text, lines, polygons, regular polygons, paths, stars, etc.,
you can also create custom shapes by instantiating the Shape class and creating a draw function.

Once you have a stage set up with layers and shapes,
you can bind event listeners, transform nodes, run animations,
apply filters, and much more.