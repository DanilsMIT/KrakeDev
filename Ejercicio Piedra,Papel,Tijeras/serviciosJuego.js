obtenerAleatorio = function () {
    let random = Math.random()
    let randomB = random * 3
    let randomI = parseInt(randomB)
    let randomR = randomI + 1

    return randomR
}

generarElemento = function () {
    let randomN = obtenerAleatorio()

    let Relement
    if (randomN == 1) {
        Relement = "piedra"
    } else if (randomN == 2) {
        Relement = "papel"
    } else if (randomN == 3) {
        Relement = "tijera"
    }

    return Relement
}

generarRuta = function (name) {

    if (name == "piedra") {
        mostrarImagen("botImagen", "./CSS/Piedra.png")
    } else if (name == "papel") {
        mostrarImagen("botImagen", "./CSS/Papel.png")
    } if (name == "tijera") {
        mostrarImagen("botImagen", "./CSS/Tijeras.png")
    }
}

determinarGanador = function (player, bot) {
    let returnoWIN
    if (player == bot) {
    returnoWIN=0
    }else if(player==1&&bot==3){
        returnoWIN=1
    }else if(player==3&&bot==2){
        returnoWIN=1
    }else if(player==2&&bot==1){
        returnoWIN=1
    }else{returnoWIN=2}

    if(returnoWIN==0){
        mostrarTexto("botImagenT2", "Empate")
    }else if(returnoWIN==1){
        mostrarTexto("botImagenT2", "Ganas")

    }else if(returnoWIN==2){
        mostrarTexto("botImagenT2", "Pierdes")

    }

    return returnoWIN
}