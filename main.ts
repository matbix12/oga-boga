radio.onReceivedNumber(function (receivedNumber) {
    bombe = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    if (bombe > 0) {
        radio.sendNumber(bombe)
        bombe = -1
    }
})
input.onButtonPressed(Button.AB, function () {
    bombe = randint(10, 24)
})
let bombe = 0
bombe = -1
radio.setGroup(128)
basic.forever(function () {
    if (bombe < 0) {
        basic.clearScreen()
    }
    if (bombe == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (bombe > 0) {
        basic.showIcon(IconNames.Yes)
        bombe += -1
    }
})
