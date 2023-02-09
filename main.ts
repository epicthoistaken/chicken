enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    time = 2
    wuKong.lightIntensity(100)
    if (receivedNumber == 1) {
        while (!(input.isGesture(Gesture.Shake))) {
            basic.showIcon(IconNames.No)
            pins.servoWritePin(AnalogPin.P1, 0)
            for (let index = 0; index < 3; index++) {
                music.playTone(988, music.beat(BeatFraction.Quarter))
                music.rest(music.beat(BeatFraction.Sixteenth))
            }
            pins.servoWritePin(AnalogPin.P1, 180)
        }
    } else {
        basic.clearScreen()
    }
})
let time = 0
pins.servoWritePin(AnalogPin.P1, 0)
radio.setGroup(1)
basic.forever(function () {
	
})
