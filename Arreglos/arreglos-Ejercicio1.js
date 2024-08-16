let notas = [];

publicarNota = function () {
    let N = recuperarInt("box");
    agregarNota(N);
}

agregarNota = function (nota) {
    notas.push(nota);
    showNotas()
}

recorrerArreglo = function () {
    let NotaPosition

    for (l = 0; l < notas.length; l++) {
        NotaPosition = notas[l]
    }
}

calcularPromedio = function () {
    let sumarNotas = 0;
    let darPromedio;
    let NotaPosition

    for (l = 0; l < notas.length; l++) {
        NotaPosition = notas[l]
        sumarNotas = sumarNotas + NotaPosition
        console.log(sumarNotas)
    }

    darPromedio = sumarNotas / notas.length
    console.log(darPromedio)

    return darPromedio
}

EjecutarPromedio = function () {
    calcularPromedio()
    let Prom = calcularPromedio()
    let Promf = Prom.toFixed(2)
    mostrarTexto("boxP", "Promedio: " + Promf)
}

generarTablita = function () {
    let tablaUbication = document.getElementById("TABLE")
    let contenidoTable="";
    contenidoTable +="<table><tr><td>ONE</td></tr></table>"
        + "<tr><td>TWO</td></tr></table>";

    tablaUbication.innerHTML = contenidoTable


}

showNotas=function(){
     let tablaUbication = document.getElementById("TABLE");
    let contenidoTable="<table><tr><th>NOTAS</th></tr>";
    let NotaPosition;
    for (let l = 0; l < notas.length; l++) {
        NotaPosition = notas[l]
        contenidoTable += "<tr><td>"
        contenidoTable += NotaPosition
        contenidoTable += "</td></tr>"
    }
    contenidoTable+="/<table>"
    tablaUbication.innerHTML=contenidoTable

}