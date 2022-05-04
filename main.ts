function CHECKMODE () {
    電流 = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    if (MODE == 1) {
        レインボー点灯(true)
    } else if (MODE == 2) {
        白流れ星(true)
    } else if (MODE == 3) {
        虹色ウェーブ(true)
    } else if (MODE == 4) {
        コメット(true)
    } else if (MODE == 5) {
        赤ドクドク(true)
    } else if (MODE == 6) {
        バウンド(true)
    } else {
        MODE = 1
        CHECKMODE()
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showString("" + MODE)
})
function コメット (flg: boolean) {
    if (flg == true) {
        strip.setBrightness(255)
        i = 0
        for (let index = 0; index < 5; index++) {
            j = 0
            for (let index = 0; index < 7; index++) {
                LEDNo = i * 29 + j
                色相 = i * 60 + j * 5
                彩度 = 200
                輝度 = 25
                strip.setPixelColor(LEDNo, neopixel.hsl(色相, 彩度, 輝度))
                j += 1
            }
            i += 1
        }
    } else if (flg == false) {
        strip.rotate(-1)
        strip.show()
    }
    電流値()
    basic.pause(10)
}
function 虹色ウェーブ (flg2: boolean) {
    if (flg2 == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setBrightness(240)
        LEDNo = 0
    } else if (flg2 == false) {
        SIN = 120 * Math.sin(明るさ) + 120
        strip.setBrightness(SIN)
        i = 0
        for (let index = 0; index < 15; index++) {
            j = 0
            for (let index = 0; index < 1; index++) {
                LEDNo = i * 10 + j
                色相 = i * 24 + j * 3
                彩度 = 200
                輝度 = 25
                strip.setPixelColor(LEDNo, neopixel.hsl(色相, 彩度, 輝度))
                j += 1
            }
            i += 1
        }
        strip.rotate(1)
        strip.show()
        電流値()
        明るさ += 0.2
        basic.pause(20)
    }
}
input.onSound(DetectedSound.Loud, function () {
    MODE += 1
    MODE = 6
    CHECKMODE()
})
function レインボー点灯 (flg3: boolean) {
    if (flg3 == true) {
        strip.setBrightness(80)
        strip.showRainbow(1, 360)
        電流値()
    } else if (flg3 == false) {
        strip.rotate(2)
        strip.show()
        電流値()
    }
}
function 白流れ星 (flg4: boolean) {
    if (flg4 == true) {
        strip.setBrightness(80)
        LEDNo = 0
    } else if (flg4 == false) {
        LEDNo = randint(0, 143)
        strip.setBrightness(100)
        i = 0
        for (let index = 0; index < 20; index++) {
            strip.setPixelColor(LEDNo, neopixel.colors(NeoPixelColors.White))
            strip.rotate(1)
            strip.show()
            電流値()
            i += 1
            basic.pause(20)
        }
        for (let index = 0; index < 20; index++) {
            strip.rotate(1)
            strip.show()
            電流値()
            basic.pause(20)
        }
        i = 0
        for (let index = 0; index < 20; index++) {
            strip.setPixelColor(LEDNo + (i + 20), neopixel.colors(NeoPixelColors.Black))
            strip.show()
            電流値()
            basic.pause(20)
            i += 1
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
}
function バウンド (flg: boolean) {
    if (flg == true) {
        j = 0
        j = 0
    } else if (flg == false) {
        j += 0.05
        if (j == 0) {
            x = 150
            y = 0
        } else if (j == 7.85) {
            LEDNo = 999
            x = 120
            y = 30
            j += 1.57
        } else if (j == 1727) {
            x = 90
            y = 60
            j += 1.57
        } else if (j == 2669) {
            x = 60
            y = 90
            j += 1.57
        } else if (j == 3611) {
            x = 30
            y = 120
            j += 1.57
        } else {
        	
        }
        if (j % 9.42 != 0) {
            i = 0
            for (let index = 0; index < 30; index++) {
                i += 1
                strip.setPixelColor(LEDNo + i, neopixel.colors(NeoPixelColors.Black))
            }
        }
        x = strip.length() - y - j % 7.85 / 3.14 * 60
        if (Math.cos(j) <= 0) {
            LEDNo = -1 * Math.cos(j)
            LEDNo = (x - y) * LEDNo + y
        } else {
            LEDNo = Math.cos(j)
            LEDNo = (x - y) * LEDNo + y
        }
        i = 0
        for (let index = 0; index < 30; index++) {
            i += 1
            if (j < 9.42) {
                strip.setPixelColor(LEDNo + i, neopixel.colors(NeoPixelColors.Red))
            } else if (j <= 18.84) {
                strip.setPixelColor(LEDNo + i, neopixel.colors(NeoPixelColors.Green))
            } else if (j <= 28.26) {
                strip.setPixelColor(LEDNo + i, neopixel.colors(NeoPixelColors.Yellow))
            } else if (j <= 37.68) {
                strip.setPixelColor(LEDNo + i, neopixel.colors(NeoPixelColors.Blue))
            } else {
                strip.setPixelColor(LEDNo + i, neopixel.colors(NeoPixelColors.Purple))
            }
        }
    }
    strip.show()
    電流値()
    basic.pause(10)
}
function SHOWAURA () {
    if (MODE == 1) {
        レインボー点灯(false)
    } else if (MODE == 2) {
        白流れ星(false)
    } else if (MODE == 3) {
        虹色ウェーブ(false)
    } else if (MODE == 4) {
        コメット(false)
    } else if (MODE == 5) {
        赤ドクドク(false)
    } else if (MODE == 6) {
        バウンド(false)
    } else {
        MODE = 1
    }
}
input.onButtonPressed(Button.B, function () {
    MODE = 6
    CHECKMODE()
})
function 電流値 () {
    if (strip.power() >= 電流) {
        電流 = strip.power()
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + 電流)
})
function 赤ドクドク (flg5: boolean) {
    if (flg5 == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setBrightness(255)
        明るさ = 0
    } else if (flg5 == false) {
        明るさ += 0.2
        SIN = 125 * Math.sin(明るさ) + 125
        strip.setBrightness(SIN)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        電流値()
        basic.pause(40)
    }
}
function レインボー切り替え (flg6: boolean) {
    if (flg6 == true) {
        strip.setBrightness(80)
        色相 = 0
    } else if (flg6 == false) {
        色相 += 10
        彩度 = 200
        輝度 = 25
        strip.showColor(neopixel.hsl(色相, 彩度, 輝度))
        電流値()
        basic.pause(100)
        if (色相 >= 260) {
            色相 = 0
        }
    }
}
let y = 0
let x = 0
let 明るさ = 0
let SIN = 0
let 輝度 = 0
let 彩度 = 0
let 色相 = 0
let LEDNo = 0
let j = 0
let i = 0
let 電流 = 0
let MODE = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 150, NeoPixelMode.RGB)
music.setVolume(30)
soundExpression.happy.play()
MODE = 6
CHECKMODE()
basic.forever(function () {
    SHOWAURA()
})
