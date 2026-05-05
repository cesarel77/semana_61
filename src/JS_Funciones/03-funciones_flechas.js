// si solo tienes una linea, el return es implicito
const multiplicar = (a, b) => a * b;
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const div = (a, b) => a / b;
//imprimimos el resultado y hardcoreamos valores
console.log("Multiplicacion: " + multiplicar(4, 5));
console.log("suma: " + suma(4, 5));
console.log("resta: " + resta(4, 5));
console.log("Divicion: " + div(4, 5));

console.log("-----------------------------------------")

//Ejemplo de como combertir celsius a fahrenhei
//const celsiusFahrenheit = (c, treintaydos) => (c * 9/5) + treintaydos;
const celsiusFahrenheit = c => (c * 9/5) + 32;
console.log("Fahrenheit: " + celsiusFahrenheit(30)); //86
//console.log("Fahrenheit: " + celsiusFahrenheit(30, 32)); //86
console.log("Fahrenheit: " + celsiusFahrenheit(16)); //60.8

console.log("-----------------------------------------")

//ArrowFunction implicita
const obtenerVersion = () => "v1.0.4";
console.log("Sistema version: " + obtenerVersion());

console.log("-----------------------------------------")

//creacion de un objeto dentro de un ArrowFunction
const crearUsuario = (id, nombre) => ({ id: id, nombre: nombre });
const userl = crearUsuario(1, "Cesar");
console.log(userl)

console.log("-----------------------------------------")

















































































































