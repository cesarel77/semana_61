(function() {
    console.log("Este codigo se ejecuta solo y no contamina el scope global.");
})
();

//tarea crear una funcion anonima que sume 3 numeros

(function() {
    console.log(1 + 2 + 3);
})();

let a = 1;
let a = 2;
let a = 3;

(function() {
    console.log(a, a, a);
})();