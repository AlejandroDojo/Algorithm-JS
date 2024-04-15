/*
Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola.
Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez.
*/
function alwaysHungry(arr) {
    // tu código aquí 
    let aux = false;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("Delicioso ");
            aux = true;
        };
    };
    if (aux != true) {
        console.log("Tengo hambre");
    };
};

/*
Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.
*/
function highPass(arr, cutoff) {
    var filteredArr = [];
    // tu código aquí
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
/*
Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.
*/
function betterThanAverage(arr) {
    var sum = 0;
    // calcula el promedio
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i];
    }
    sum /= arr.length; // Calculo de promedio. (sumatotalitems / totalitems)
    var count = 0
    // cuenmta cuánmtas variables son mayores que el promedio
    for(let i = 0; i< arr.length; i++) {
        if (arr[i] > sum) {
            count++;
        }
    }
    return count;
}

// CALL
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta