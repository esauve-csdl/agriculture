input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P10, 1)
    Pompe = 1
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P10, 0)
    Pompe = 0
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P9, 1)
    strip.setBrightness(255)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    Lumieres = 1
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    pins.digitalWritePin(DigitalPin.P9, 0)
    Lumieres = 0
})
function Affichage () {
    OLED.writeStringNewLine("" + (RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY) - 0) + "/" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH) + "/" + (RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR) - 0) + "  " + (RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) - 0) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND) + " ")
    OLED.writeStringNewLine("Temperature  : " + Temp + "  ")
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
    if (Porte == 1) {
        OLED.writeStringNewLine("Porte      : " + "Ouverte")
    } else {
        OLED.writeStringNewLine("Porte       : " + "Fermee")
    }
}
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P4, 90)
    Porte = 1
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P4, 0)
    Porte = 0
})
let Porte = 0
let Lumieres = 0
let Pompe = 0
let Luminosite = 0
let Temp = 0
let Hum_Sol = 0
let Hum_Air = 0
let strip: neopixel.Strip = null
led.enable(false)
strip = neopixel.create(DigitalPin.P16, 1, NeoPixelMode.RGB)
basic.pause(1000)
OLED.init(128, 64)
pins.servoWritePin(AnalogPin.P4, 0)
Hum_Air = 0
Hum_Sol = 0
let Fan = 0
Temp = 0
let Eclairage = 0
Luminosite = 0
Pompe = 0
Lumieres = 0
dht11_dht22.queryData(
DHTtype.DHT11,
DigitalPin.P8,
true,
false,
true
)
basic.forever(function () {
    Temp = dht11_dht22.readData(dataType.temperature)
    Hum_Air = dht11_dht22.readData(dataType.humidity)
    Hum_Sol = pins.analogReadPin(AnalogPin.P0)
    Luminosite = pins.analogReadPin(AnalogPin.P1)
})
basic.forever(function () {
    Affichage()
})
