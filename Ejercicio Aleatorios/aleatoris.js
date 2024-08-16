

random = function () {
    let randomNf = Math.random();
    let randomNB = randomNf * 100
    let randomN = parseInt(randomNB)
    let random = randomN + 1

    return random
}

generarRandom = function () {
let aleatorio = []

    let NumberIngresado = recuperarInt("box")
    let NumberUsuario
    if (NumberIngresado >= 5 && NumberIngresado <= 20) {
        NumberUsuario = true
    } else {
        NumberUsuario = false
        alert("No es un número entre 5 y 20")
    }

    let numberIterado
    for (n = 0; n < NumberIngresado; n++) {

        if (NumberUsuario == true) {
            numberIterado=random()
            aleatorio.push(numberIterado)
        }
    }

    showResults(aleatorio)

}

showResults=function(arregloNumbers){
    let tablitaID=document.getElementById("TABLE")
    let tablitaResult="<table><tr><th>RESULTADOS</th></tr>"

    let aleatorioN
    for(a=0;a<arregloNumbers.length;a++){

        aleatorioN=arregloNumbers[a]

        tablitaResult += "<tr><td>"
        tablitaResult += aleatorioN
        tablitaResult += "</td></tr>"
    }

    tablitaResult+="/<table>"
    tablitaID.innerHTML=tablitaResult
}