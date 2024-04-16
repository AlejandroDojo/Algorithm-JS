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
// Escribe una función que invierta los valores de un arreglo y los devuelva.

function reverse(arr) {
    // tu código aquí
    let aux = [];
    for (let i = arr.length -1 ; i>=0; i--) {
        aux.push(arr[i]);
    }
    arr = aux;
    return arr;
}
/*
Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. 
Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia.
Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.
*/

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    for(let i = 1; i<= n; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i]);
    }
    return fibArr;
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
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
