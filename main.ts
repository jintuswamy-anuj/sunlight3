basic.forever(function () {
    if (input.lightLevel() > 160) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.clearScreen()
    }
})
