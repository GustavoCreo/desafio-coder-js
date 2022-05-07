
/*let entrada = prompt("¿Qué quiere pedir?");

while(entrada != "Nada más" ){
    alert("Se agregó al pedido "+ entrada);
    
    entrada = prompt("¿Desea algo más?");
}*/

//prompt de bienvenida 
let nombreUsuario = prompt("Ingresar nombre de usuario");
//function que tome los datos ingresados
function nombrecompleto(nombre, apellido) {
    nombreUsuario = nombre + apellido
}
//Alert que da la bienvenida
alert("Bienvenido " + nombreUsuario)
//No estoy seguro si lo arme bien, la idea es que tome los datos del prompt para hacer el alert mediante el function, espero a la corrección





/*let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Bienvenido/a " + nombreUsuario);
}*/

