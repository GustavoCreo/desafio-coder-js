let btn = document.getElementById("btn");



btn.addEventListener("click", function () {
    let tiraAsado = 200;
    let bondiola = 400;
    let chori = 175;
    let tapa = 250;
    let bife = 200;
    let ojoBife = 500;
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