//Local Storage
localStorage.setItem('tiraDeAsado','200')
localStorage.setItem('bondiola','400')
localStorage.setItem('chori','175')
localStorage.setItem('tapaDeNalga','250')
localStorage.setItem('bifeDeChorizo','200')
localStorage.setItem('ojoDeBife','500')

//Array
const precios = ["Chori ", "Bondiola ", "Tira de Asado "]

console.log( precios.join(" + ") ) 

//Pedidos
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    //productos
    let tiraAsado = localStorage.getItem('tiraDeAsado');
    let bondiola = localStorage.getItem('bondiola');
    let chori = localStorage.getItem('chori');
    let tapa = localStorage.getItem('tapaDeNalga');
    let bife = localStorage.getItem('bifeDeChorizo');
    let ojoBife = localStorage.getItem('ojoDeBife');
    //calculos
    let cantidadTiraAsado = document.getElementById("cantidadTira").value;
    let numeroTira = (cantidadTiraAsado * tiraAsado)
    let cantidadBondiola = document.getElementById("cantidadBondiola").value;
    let numeroBondiola = (cantidadBondiola * bondiola)
    let cantidadChori = document.getElementById("cantidadChori").value;
    let numeroChori = (cantidadChori * chori)
    let cantidadTapa = document.getElementById("cantidadTapa").value;
    let numeroTapa = (cantidadTapa * tapa)
    let cantidadBife = document.getElementById("cantidadBife").value;
    let numeroBife = (cantidadBife * bife)
    let cantidadOjo = document.getElementById("cantidadOjo").value;
    let numeroOjo = (cantidadOjo * ojoBife)
    let costoTotal = document.getElementById("costoTotal").value = (numeroTira + numeroBondiola + numeroChori + numeroTapa + numeroBife + numeroOjo);
})

console.log(costoTotal)

//Prompt
/*function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("Benvenido/a " + nombreIngresado)
} 

solicitarNombre("")*/

//getElementBy
let subTitulo = document.getElementById("subTextoParri")
//texto en linea 44 de html
subTitulo.innerHTML = "<p>El mejor Parri-Pollo de Lugano</p>"
