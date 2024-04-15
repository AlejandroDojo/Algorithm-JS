// Usando un bucle, escribe un código que haga que console.logimprima todos los valores impares del 1 al 20.
function impar() {
    for (let i = 1; i < 21 ; i++) {
        if (i  % 2 === 1) {
            console.log(i);
        };
    };
}
//  Usando un bucle, escribe un código que haga que console.log
// imprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.
function multipleOfThree() {
    let i = 0;
    while (i <= 100) {
        if (i % 3  === 0) {
            console.log(i);
        };
        i++;
    };

}
// Usando un bucle, escribe un código que haga que console.log
// imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.
function secuences() {
    for (let i = 4; i >= -3.5; i-=1.5) {
        console.log(i);
    };
}
/*
Escribe código que sume todos los valores del 1 al 100 en una variable sum y, 
al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. 
Deberíamos obtener 5050 al final.
*/
function sigma() {
    let sum = 0;
    for (let i = 0; i < 101; i++) {
        sum+= i;
    };
    console.log(sum);
}
sigma();