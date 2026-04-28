
//creamos una variable  en este caso sera numerica
let menu = 1;

//Definimos un switch basico, operado por numeros
//Aca se integran las opciones en los cases
//Tarea hagan hasta la opcion 4
switch(menu){
    case 1:
        imprime = ("Opcion 1");
        break;
    case 2:
        imprime = ("Opcion 2");
        break;
    case 3:
        imprime = ("Opcion 3");
        break;
    default:
        imprime = ("Opcion no definida");
}
console.log(imprime);


console.log("---------------------")


//definimos una variable
var dia = "Jueves";
//designamos el switch con una variable de texto
switch(dia){
    case "Lunes":
        imprime2 = ("Este es el dia " + dia);
        break;
    case "Martes":
        imprime2 = ("Este es el dia " + dia);
        break;
    case "Miercoles":
        imprime2 = ("Este es el dia " + dia);
        break;
    case "Jueves":
        imprime2 = ("Este es el dia " + dia);
        break;
    case "Viernes":
        imprime2 = ("Este es el dia " + dia);
        break;
    case "Sabado":
        imprime2 = ("Fin de semana " + dia);
        break;
    case "Domingo":
        imprime2 = ("Fin de semana " + dia);
        break;
    default:
        imprime2 = "Dia no valido";
        break;
}
console.log(imprime2);

console.log("---------------------")

//definimos una variable
var edad = 65;
//definimos las variables con condiciones
var esNiño = edad < 13;
var esAdolescente = edad >= 13 && edad < 18;
var esAdulto = edad >= 18 && edad < 65;
var esAdultoMayor = edad >= 65;
console.log(typeof (esNiño));
switch(true){
    case esNiño:
        parametros = "Eres un niño";
        break;
    case esAdolescente:
        parametros = "Eres un adolescente";
        break;
    case esAdulto:
        parametros = "Eres un adulto";
        break;
    case esAdultoMayor:
        parametros = "Eres un adulto mayor";
        break;
    default:
        parametros = "Edad no valida";
        break;
}
console.log(parametros);