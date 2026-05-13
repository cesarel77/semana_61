

//La funcion principal: ella tiene el mensaje, pero no sabe que hacer con el
function obtenerMensaje(callBack) {
    const texto = "¡Clase de js terminada!";
    callBack(texto); // le pasa el texto a la funcion que tu le envies
}
//opcion A: solo imprimirlo
obtenerMensaje((m) => console.log(m));
//opcion B: alertarlo aparece una ventana en el navegador
//obtenerMensaje((m) => alert(m));

console.log("-----------------------------------")

//Funcion principal (el cerebro)
function calculadora(a,b, operacion){
    return operacion(a,b);      
}
//aqui definimos las instrucciones calbacks sobre la marcha
const suma = calculadora(10, 5, (x, y) => x + y);
const resta = calculadora(10, 5, (x, y) => x - y);
const multi = calculadora(10, 5, (x, y) => x * y);

console.log("Suma: " + suma); //15
console.log("Resta: " + resta); //5
console.log("Multiplicacion: " + multi); //50

console.log("-----------------------------------")

//definicion : procesarEntrada es la funcion principal
function procesarEntrada(callback) {
    let nombre = "Usuario";
    //aqui es donde llamamos de buelta a la funcion que recibimos
    callback(nombre);
}

//ejecucion: aqui creamos la calback la fecha y se la pasamos
procesarEntrada((n) => {
    console.log("la funcion calback: " + n);
})

console.log("-----------------------------------")

const nums = [1, 2, 3, 4, 5];
//funcion principal que recorre el array
function operarConNumeros(lista, accion) {
    for (let n of lista) {
        accion(n); //ejecutamos la accion que nos mande
    }
}

// caso a: queremos imprimir el doble
operarConNumeros(nums, (num) => {
    console.log("El doble de " + num + " es " + (num * 2)); 
});

console.log("---");

//caso b: queremos saber si son pares
operarConNumeros(nums, (num) => {
    if (num % 2 === 0)
        console.log(num + " es par "); 
});

console.log("-----------------------------------")

function formatearNombre(nombre, apellido, callback) {
    return callback(nombre, apellido);
}

//Ejemplo 1: formato para una lista de asistencia (apellido, nombre)
const listaAsistencia = formatearNombre("Cesar", "Oñate", (n, a) => {
    return a.toUpperCase() + ", "+ n;
});
console.log(listaAsistencia); //OÑATE , cesar

//ejemplo 2: formato para un diploma(nombre apellido)

const diploma = formatearNombre("Cesar", "Oñate", (n, a) => {
    return "don/doña " + n + " " + a;
});
console.log(diploma); // don cesar oñate

console.log("-----------------------------------")
/*
function procesarEntrada(callBack) {
    console.log("1. el sistema esta preparando los datos...");
    let nombre = "Cesar";
    
    console.log("2.los dos estan listos. llamando a la callback... ");
    callback(nombre); 
    }
    console.log(depurar);
    //aqui tu decides que pasa al final del proceso
    procesarEntrada((n) => {
        console.log("3. ¡Hola " + n + "¡los datos que guardaron con exito.");
        });
        */
       
console.log("-----------------------------------")
/*
//callback que valida informacion

//funcion principal: recibe un dato y una funcion que decide si es valido
function validarDato(dato, callback) {
    if (callback(dato)) {
        console.log("dato valido" + dato);
    }else {
        console.log("dato invalido" + dato);
    }
}
// validar si el numero es ,mallor a10
validarDato(()
)
*/
/*
//funcion principal: recibe un texto y una funcion que lo modifica
function trasformarTexto(texto, callback) {
    return callback(texto);
}
//callback 1: convertir a mallusculas
const mayus = trasformarTexto("Hola mundo", (t) => t.toUpperCase());
//callback 2: agregar signos
const exclamacion = transformarTexto("hola mundo", (t) => "¡¡" + t + "!!");

//tarea
const exclamacionMayus = transformarTexto("hola mundo", (t) => "¡¡" + t.toUpperCase() + "!!");

console.log(mayus);
console.log(exclamacion);
console.log(exclamacionMayus);
*/

console.log("----------------------------------------------")

// callback ejecutado varias veces (contador)

//funcion principal: repite una accion varias veces
function repetirAccion(veces, callback) {
    for (let i = 1; i <= veces; i++) {
        callback(i);
    }
}

//callback: mostrar numero de repeticion
repetirAccion(3, (num) => {
    console.log("ejemplo numero: " + num);
});

console.log("----------------------------------")

//Simulacion simple de proceso mas real

// funcion principal: simula un proceso de compra
function procesarCompra(producto, callback) {
    console.log("procesando compra de: " + producto);
    //aqui se ejecuta lo que queremos hacer despues
    callback(producto);
}
//callback 1: mostrar mensaje de exito
procesarCompra("Moteboock", (p) => {
    console.log("compra realizada con exito" + p);
});

console.log("---");

//callback 2_: generar boleta
procesarCompra("notebook", (p) => {
    console.log("generar bolerta para" + p);
})

console.log("---------------------------")

//procesador con multiples callbacks filtrar + transformar + accion final

// funcion principal: recibe una lista y tres callbacks
function procesarDatos(lista, filtro, transformador, accionFinal) {
    let resultado = [];

    for (let elemento of lista) {
        //1. primero decidimos si el elemento pasa el filtro
        if (filtro(elemento)) {
            //2. luego transformamos el elemento
            let transformado = transformador(elemento);
            //3. guardamios el resultado
            resultado.push(transformado);
        }
    }
    //4. finalmente ejecutamos una accion con todos lpos resultacos
    accionFinal(resultado);
};

console.log("-----------------------------------------")

//lista de numeros
const numeros = [1, 2, 3, 4, 5, 6];
//ejecucion: aqui esta lo complejo
//estamos pasando 3 callbacks distintos al mismo tiempo
procesarDatos(
    numeros,
    //callback 1:  filtro solo numeros pares
    (n) => n % 2 === 0,
    //callback 2: transformador multiplicar por 10
    (n) => n * 10,
    //callback 3: accion final (mostrar resultados)
    (resultado) => {
        console.log("Resultado final: ");
        for (let r of resultado) {
            console.log(r);
        }
    }
)

;

































































