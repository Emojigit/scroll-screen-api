
> Open this page at [https://emojigit.github.io/scroll-screen-api/](https://emojigit.github.io/scroll-screen-api/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/emojigit/scroll-screen-api** and import

## Edit this project ![Build status badge](https://github.com/emojigit/scroll-screen-api/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/emojigit/scroll-screen-api** and click import

## API
The class `scroll.Scroller` is the basic class of this extension. When calling it, provide an array with arrays contains pre and post functions incide. See the following example:

```js
let subScroll = new scroll.Scroller([
    [
        (function () {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
            `)
        }),
        (function () {
            basic.showString("+++");
        })
    ],
    [
        (function () {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
            `)
        }),
        (function () {
            basic.showString("---");
        })
    ],
])

new scroll.Scroller([
    [
        (function () {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
            `)
        }),
        (function () {
            basic.showString("+++");
        })
    ],
    [
        (function () {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
            `)
        }),
        (function () {
            basic.showString("---");
        })
    ],
    [
        (function () {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
            `)
        }),
        (function () {
            subScroll.start(true);
        })
    ],
]).start()
```
