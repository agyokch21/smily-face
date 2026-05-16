input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.QuarterNote)
    basic.pause(2000)
    basic.showIcon(IconNames.Duck)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
})
