
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

// Funcion sin parametro
function mostrarFechaActual() {
    //ojo estamos usando una constante, es decir no cambia
    //pero,... la hora cambia a cada segundo
    const ahora = new Date();
    console.log("Hoy es: " + ahora.toLocaleDateString());
    //console.log("Hoy es: " + ahora);
}
//cada vez que la llames, hara exactamente lo mismo
mostrarFechaActual();

console.log("---------------------------------")

//funcion con if, omitimos la creacion  de variables, ya que las parseamos abajo
function verificarAcceso(nombre, edad) {
    if (edad >= 18) {
        console.log("Bienvenido " + nombre + ". Tienes acceso concedido.");
    }else {
        console.log("Lo siento " + nombre + ", eres menor de edad .");
    }
}
verificarAcceso("Elza Patito", 25);
verificarAcceso("Elviz Tek", 16);

console.log("---------------------------------")

//Tarea, crear la misma funcion de arriba pero definiendo las variables
let edadA = 20;
let nombreA = "Jardin J";
function verificarAccesoTarea() {
    if (edadA >= 18) {
        console.log("Bienvenido " + nombreA + ". Tienes el acceso concedido.");
    }else {
        console.log("Lo siento " + nombreA + ", eres un menor de edad .");
    }
}
verificarAccesoTarea();

console.log("---------------------------------")

//definimos la variable con un monto
function calcularImpuesto(monto) {
    //esta bariable solo existe aqui dentro, visto en clase pasada
    let tasa = 0.19;
    let total = monto * tasa;
    return total
}
//Resultado que esperamos 190
console.log("Resultado: ", calcularImpuesto(1000));

console.log("---------------------------------")

function multiRestDiv(mrd) {
    let numeroAMultiplicar = mrd * 10;
    let numeroResta = numeroAMultiplicar - mrd;
    let numeroDiv = numeroResta / mrd;
    return numeroDiv;
}
console.log("Resultado: ", multiRestDiv(10));
































