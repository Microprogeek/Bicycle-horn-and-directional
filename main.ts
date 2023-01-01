input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    basic.pause(500)
    basic.clearScreen()
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
    basic.pause(500)
    basic.clearScreen()
    radio.sendNumber(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 3; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    }
})
radio.setGroup(1)
