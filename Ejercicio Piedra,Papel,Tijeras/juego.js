let puntosmaquina = 0
let puntosjugador = 0

let juegoplayer
jugarPiedra = function () {
    juegoplayer = 1
}
jugarPapel = function () {
    juegoplayer = 2
}
jugarTijera = function () {
    juegoplayer = 3
}

jugar = function (jugada) {
    let jugadabot = generarElemento()
    let juegobot
    if (jugadabot == "piedra") {
        juegobot = 1
        mostrarTexto("botImagenT", "Piedra")
        generarRuta(jugadabot)
    } else if (jugadabot == "papel") {
        juegobot = 2
        mostrarTexto("botImagenT", "Papel")
        generarRuta(jugadabot)
    } else if (jugadabot == "tijera") {
        juegobot = 3
        mostrarTexto("botImagenT", "Tijera")
        generarRuta(jugadabot)
    }

    let juego = determinarGanador(juegoplayer, juegobot)

    if (juego == 1) {
        puntosjugador = puntosjugador + 1
    } else if (juego == 2) {
        puntosmaquina = puntosmaquina + 1
    }

    mostrarTexto("PuntosPlayer", puntosjugador)
    mostrarTexto("PuntosMaquina", puntosmaquina)

    if (puntosjugador == 5) {
        mostrarTexto("Partida", "GAMEOVER")
        mostrarTexto("FIN", "VICTORIA")
        mostrarImagen("return", "./CSS/retry.png")
        puntosmaquina = ""
        puntosjugador = ""

    } else if (puntosmaquina == 5) {
        mostrarTexto("Partida", "GAMEOVER")
        mostrarTexto("FIN", "DERROTA")
        mostrarImagen("return", "./CSS/retry.png")
        puntosmaquina = ""
        puntosjugador = ""

    }
}

otraves = function () {
    mostrarImagen("botImagen", "./CSS/STAR.gif")
    mostrarTexto("botImagenT2", "")
    mostrarTexto("botImagenT", "")
}

limpiar = function () {
    mostrarTexto("PuntosPlayer", "0")
    mostrarTexto("PuntosMaquina", "0")
    mostrarImagen("botImagen", "./CSS/STAR.gif")
    mostrarTexto("botImagenT2", "")
    mostrarTexto("botImagenT", "")
    puntosmaquina = 0
    puntosjugador = 0
    mostrarImagen("return", "")
    mostrarTexto("FIN", "")
    mostrarTexto("Partida", "Partida")
}