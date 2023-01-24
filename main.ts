let temp_c = 0
let temp_f = 0
/**
 * temp con 
 * 
 * temp f = temp c 1.8 +32
 */
input.onButtonPressed(Button.A, function () {
    basic.showNumber(temp_c)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(temp_f)
})
basic.forever(function () {
    temp_f = temp_f + 32
    temp_c = input.temperature()
    temp_f = temp_c * 1.8
})
