

//definir las variables
let edad = 30;
let limiteEdad= 18;

//IF
if(edad >= limiteEdad){
    console.log("es mayor de edad");
}else{
    console.log("es menor de edad");
}

console.log("---------------------------");

//If anidado
if(edad >= limiteEdad){
    console.log("es mayor de edad");
   
    if(edad == 20){
        console.log("el usuario tiene 20");
    }else if(edad >= 21){
        console.log("Es adulto en todos lados");
    }
}else{
    console.log("es menor de edad");
}

console.log("---------------------------");

//creamos otrom if, usando el "Y" (&&)
if(edad >= limiteEdad &&(edad <= (limiteEdad + 82))){
    console.log("mayor de edad y menor de 100");
    //agregamos el operador && (Y) y el distinto !=
}else if(edad <= limiteEdad && edad != 2){
    console.log("Esta persona es menor de edad y no tiene dos años");
}else{
    console.log("es un puberto");
}


console.log("---------------------------");

//if con condicional "ó"
if( (edad == 1) || (edad < limiteEdad) ){
    console.log("No puede comprar alcohol");
}else{
    console.log("Si puede comprar alcohol");
}