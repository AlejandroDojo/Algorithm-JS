// Usando un bucle, escribe un código que haga que console.logimprima todos los valores impares del 1 al 20.
function impar() {
    for (let i = 1; i < 21 ; i++) {
        if (i  % 2 === 1) {
            console.log(i);
        };
    };
};
impar();
//  Usando un bucle, escribe un código que haga que console.log
//imprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.
function multipleOfThree() {
    let i = 0;
    while (i <= 100) {
        if (i % 3  === 0) {
            console.log(i);
        };
        i++;
    };

};
multipleOfThree();