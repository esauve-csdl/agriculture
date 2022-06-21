input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P9, 1)
    Pompe = 1
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P9, 0)
    Pompe = 0
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P10, 1)
    Lumieres = 1
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P10, 0)
    Lumieres = 0
})
function Affichage () {
    OLED.writeStringNewLine("" + (RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY) - 2) + "/" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH) + "/" + (RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR) - 32) + "  " + (RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) - 6) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND) + " ")
    OLED.writeStringNewLine("Temperature  : " + Temp + " oC")
    OLED.writeStringNewLine("Humidite Sol : " + Hum_Sol + "  ")
    OLED.writeStringNewLine("Humidite Air : " + Hum_Air + "  ")
    OLED.writeStringNewLine("Luminosite   : " + Luminosite + "  ")
    if (Pompe == 1) {
        OLED.writeStringNewLine("Pompe        : " + "ON ")
    } else {
        OLED.writeStringNewLine("Pompe        : " + "OFF")
    }
    if (Lumieres == 1) {
        OLED.writeStringNewLine("Lumiere      : " + "ON ")
    } else {
        OLED.writeStringNewLine("Lumiere      : " + "OFF")
    }
    if (Fan == 1) {
        OLED.writeStringNewLine("Fan          : " + "ON ")
    } else {
        OLED.writeStringNewLine("Fan          : " + "OFF")
    }
}
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P4, 1)
    Fan = 1
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P4, 0)
    Fan = 0
})
let Lumieres = 0
let Pompe = 0
let Luminosite = 0
let Temp = 0
let Fan = 0
let Hum_Sol = 0
let Hum_Air = 0
led.enable(false)
basic.pause(1000)
OLED.init(128, 64)
pins.digitalWritePin(DigitalPin.P9, 0)
Hum_Air = 0
Hum_Sol = 0
Fan = 0
Temp = 0
let Eclairage = 0
Luminosite = 0
Pompe = 0
Lumieres = 0
basic.forever(function () {
    Affichage()
})
