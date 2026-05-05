//definimos las variables
let a = 22;
let b = 31;

//declaramos una funcipon
function sumar(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function divicion(a, b) {
    return a / b;
}
//definimos una variable llamando una funcion
let resultadoSuma = sumar(a, b);
let resultadoResta = resta(a, b);
let resultadoDivicion = divicion(a, b);
console.log("El resultado de la suma es: " + resultadoSuma);
console.log("El resultado de la resta es: " + resultadoResta);
console.log("El resultado de la divicion es: " + resultadoDivicion);

console.log("--------------------------------------------")

function sumar2(x, z) {
    return x + z; 
}
function restar2(x, z) {
    return x - z; 
}
function div2(x, z) {
    return x / z; 
}
let resultadoSuma2 = sumar2(10, 5)
let resultadoResta2 = restar2(10, 5)
let resultadoDiv2 = div2(10, 5)
console.log("El resultado de la suma es: " + resultadoSuma2);
console.log("El resultado de la resta es: " + resultadoResta2);
console.log("El resultado de la Div es: " + resultadoDiv2);

console.log("--------------------------------------------")

function multiplicar(d, n) {
    return d * n;
}
let resultado3 = multiplicar(10, 5)
console.log("El resultado de la multiplicacion es: " + resultado3);







































































