//La funcion principal: ella tiene el mensaje, pero no sabe que hacer con el
function obtenerMensaje(callBack) {
    const texto = "¡Clase de js terminada!";
    callBack(texto); // le pasa el texto a la funcion que tu le envies
}
//opcion A: solo imprimirlo
obtenerMensaje((m) => console.log(m));
//opcion B: alertarlo aparece una ventana en el navegador
//obtenerMensaje((m) => alert(m));

















