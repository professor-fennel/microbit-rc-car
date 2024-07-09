radio.onReceivedValue(function (name, value) {
    if (name == "A") {
        if (value == 1) {
            a_speed = 100
            led.plot(0, 2)
        } else if (value == -1) {
            a_speed = -50
            led.plot(2, 4)
        }
    } else if (name == "B") {
        if (value == 1) {
            b_speed = -100
            led.plot(4, 2)
        } else if (value == -1) {
            b_speed = 50
            led.plot(2, 4)
        }
    }
})
let b_speed = 0
let a_speed = 0
hummingbird.startHummingbird()
radio.setGroup(117)
basic.clearScreen()
hummingbird.setRotationServo(FourPort.One, 0)
hummingbird.setRotationServo(FourPort.Two, 0)
basic.forever(function () {
    basic.clearScreen()
    hummingbird.setRotationServo(FourPort.One, a_speed)
    hummingbird.setRotationServo(FourPort.Two, b_speed)
    a_speed = 0
    b_speed = 0
})
