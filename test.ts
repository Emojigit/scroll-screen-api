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

let numberScroll = new scroll.NumberScroller(1)

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
            basic.showNumber(numberScroll.start());
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