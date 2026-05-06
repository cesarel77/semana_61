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
const user1 = crearUsuario(1, "Cesar");
const user2 = crearUsuario(2, "Ana");
const user3 = crearUsuario(3, "Pedro");
console.log(user1);
console.log(user2);
console.log(user3);
// Los guardamos en una lista para manejarlos
const listaUsuarios = [user1, user2, user3];
console.log(listaUsuarios);

console.log("-----------------------------------------")

//creamos el array de precio
const precios = [100, 200, 300, 400];
//aplicar un descuento del 10% a todos los precios en una
//ArrowFunction, (map es para recorrer un array)
const preciosConDescuento = precios.map(p => p * 0.9);
// [90, 180, 270, 360]
console.log(preciosConDescuento);

console.log("-----------------------------------------")

const superHeroes = ["Omniman", "Invensible", "AtomEve", "TheInmortal"]
// .map recorre el array y por cada nombre crea un objeto
// el segundo parametro de map i es el indice (0, 1, 2...)
const superHeroesProcesados = superHeroes.map((nombre, id) => 
//recordar que cada objeto debe estar en un parentesis
    (
        {
            id: id + 1, 
            nombre: nombre
        }
    )
);  
console.table(superHeroesProcesados);

console.log("-----------------------------------------")
console.log("-----------------------------------------")
console.log("-----------------------------------------")

















































































































