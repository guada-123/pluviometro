let Cantidad_Agua = 0
let Valor_dado = 0
let Promedio = 0
input.onButtonPressed(Button.A, function () {
    Cantidad_Agua = 0
    for (let index = 0; index < 7; index++) {
        Valor_dado = randint(1, 6)
        Cantidad_Agua += Valor_dado
    }
    basic.showString("C.AGUA=")
    basic.showNumber(Cantidad_Agua)
    Promedio = Cantidad_Agua / 7
    basic.showString("P=")
    basic.showNumber(Promedio)
})
