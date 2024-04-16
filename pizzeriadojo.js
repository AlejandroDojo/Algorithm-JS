// Funcion para crear un objeto pizza
function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos= quesos;
    pizza.salsas = salsas;
    return pizza;
}
// Se crea un objeto de Pizza Tradicional
var pizzaTradicional = pizzaOven(
    "estilo Chicago",
    "tradicional",
    ["mozarrella"],
    ["pepperoni", "salchicha"]
);
var pizzaMarinara = pizzaOven(
    "lanzada a mano",
    "marinara",
    ["mozarrella", "feta"],
    ["champiñones", "aceitunas", "cebollas"]
);