basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showString("T=")
        basic.showNumber(input.temperature())
        basic.showString("degrés")
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
