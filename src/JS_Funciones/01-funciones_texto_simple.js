
//definimos una variable
let nombre = "Cesar";
//creamos la primera funcion
function saludar(){
    console.log("Hola profesor " + nombre + "!");
    console.log("Estamos en clases");
}
//llamamos a la funcion a ejecutar
saludar();

console.log("---------------------------------")

//declaracion tradicional
function saludar2(apellido) {
    console.log("Hola " + apellido + "! ");
}
//llamamos a la funcion
saludar2("Oñate");

console.log("---------------------------------")

//declaracion tradicional
function saludar2(apellidoa, apellidob) {
    console.log("Hola " + apellidoa + "! " + apellidob);
}
//llamamos a la funcion
saludar2("Oñate", "original");

console.log("---------------------------------")

function saludar2(apellidoa, apellidob) {
    console.log("Hola " + apellidoa + "! " + apellidob);
}
let ejemploA = "Sepulveda";
//llamamos a la funcion
saludar2(ejemploA, "original");

console.log("---------------------------------")