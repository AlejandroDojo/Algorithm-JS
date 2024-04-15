// Usando un bucle, escribe un código que haga que console.logimprima todos los valores impares del 1 al 20.
function impar() {
    for (let i = 1; i < 21 ; i++) {
        if (i  % 2 === 1) {
            console.log(i)
        }
    }
}
impar()