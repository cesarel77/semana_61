

//definimos una bariable numero
var numero = 10;
//Utilizamos el for para incrementar en 1 cada numero
for (var i = 1; i <= numero; i++) {
    console.log("Numero: ", i);
}
console.log("---------------------------")

for (var i = 10; i >= 1; i--) {
    imprime = ("Numero: ", i);
    console.log(imprime);
}

console.log("---------------------------")
console.log("---------------------------")
console.log("---------------------------")

//buscamos el numero par, pero notar que estamos sumando 2
for (var i = 2; i <= numero; i += 2) {
    console.log("Par: ", i)
}

console.log("---------------------------")
console.log("---------------------------")
console.log("---------------------------")

//Identificamos los numeros par e impar
for(var i = 1; i <= numero; i++) {
    var esPar = i % 2 === 0;
    if (esPar) {
        console.log(i + "es par");
    } else {
        console.log(i + "es inpar")
    }
}

console.log("---------------------------")

//definimos una Array de string, en este caso de frutas
var frutas = ["Manzana","pera","uva","naranja"];

//recorremos el array, recordar que las listas empiuezan del: 0, 1
for (var i = 0; i < frutas.length; i++){
    console.log("fruta: ", frutas[i]);
}
