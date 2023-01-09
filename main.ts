radio.onReceivedNumber(function (receivedNumber) {
    bombe = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    if (hjem_sjerm == 1) {
        if (bombe > 0) {
            radio.setGroup(60)
            radio.sendNumber(bombe)
            bombe = -1
            radio.setGroup(80)
        }
    } else {
        player += -1
        if (player == 0) {
            player = 10
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (hjem_sjerm == 1) {
        radio.setGroup(60)
        bombe = randint(10, 30)
        radio.setGroup(80)
    } else {
        if (player == 1) {
        	
        } else if (player == 1) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    player += 1
    if (player == 11) {
        player = 1
    }
})
let player = 0
let bombe = 0
let hjem_sjerm = 0
hjem_sjerm = 0
bombe = -1
radio.setGroup(1)
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
