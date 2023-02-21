input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Tortoise)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.forever(function () {
    basic.showString("Bonjour")
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
})
