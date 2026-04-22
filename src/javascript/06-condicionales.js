

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