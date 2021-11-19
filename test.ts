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