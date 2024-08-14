let secretWord;
let intentos = 10;
let coincidencias = 0;
let errores = 0;

let letra1 = 0;
let letra2 = 0;
let letra3 = 0;
let letra4 = 0;
let letra5 = 0;

let letraA = "";
let letraB = "";
let letraC = "";
let letraD = "";
let letraE = "";
let victoria

esMayuscula = function (letra) {
    let asciiLetra = letra.charCodeAt(0)

    let Mayuscula
    if (asciiLetra >= 65 && asciiLetra <= 90) {
        Mayuscula = true
    } else { Mayuscula = false }

    return Mayuscula
}

guardarPalabra = function () {
    let word = recuperarTexto("txtSecreta")
    let wordLong = word.length

    let longValida

    let mayusculasRevisadas
    let analisisLetras
    let palabraValida

    if (wordLong == 5) {
        longValida = true

        let w
        for (w = 0; w < wordLong; w++) {
            analisisLetras = word.charAt(w)
            mayusculasRevisadas = esMayuscula(analisisLetras)
        }

        if (mayusculasRevisadas == true) {
            palabraValida = true
        } else {
            palabraValida = false
        }
    } else {
        longValida = false
    }

    let caractersave
    if (palabraValida == true && longValida == true) {
        for (n = 0; n < wordLong; n++) {
            caractersave = word.charAt(n)

            if (n == 0) {
                letraA = caractersave
            } else if (n == 1) {
                letraB = caractersave
            } else if (n == 2) {
                letraC = caractersave
            } else if (n == 3) {
                letraD = caractersave
            } else if (n == 4) {
                letraE = caractersave
            }
        }

        secretWord = word
        console.log(secretWord)
    } else {
        secretWord = null
        console.log(secretWord)
        alert("¡LA PALABRA SOLO SE COMPONE DE 5 LETRAS MAYÚSCULAS!")
    }
}

showLetra = function (letraC, posicion) {


    if (posicion == 0) {
        mostrarTexto("div0", letraC)
        letra1 = letra1 + 1

    } else if (posicion == 1) {
        mostrarTexto("div1", letraC)
        letra2 = letra2 + 1
    } else if (posicion == 2) {
        mostrarTexto("div2", letraC)
        letra3 = letra3 + 1
    } else if (posicion == 3) {
        mostrarTexto("div3", letraC)
        letra4 = letra4 + 1
    } else if (posicion == 4) {
        mostrarTexto("div4", letraC)
        letra5 = letra5 + 1
    }
}

validarLetra = function (letra) {
    let palabraLong = secretWord.length

    let compararLetra
    let a
    for (a = 0; a < palabraLong; a++) {
        compararLetra = secretWord.charAt(a)

        if (letra == compararLetra) {
            showLetra(letra, a)
            coincidencias = coincidencias + 1
        }


    }


}

IngresarLetra = function () {
    let letra = recuperarTexto("txtLetra")

    if (esMayuscula(letra)) {
        validarLetra(letra)
    } else { alert("¡SOLO SE JUEGA CON LETRAS MAYÚSCULAS!") }

    if (coincidencias == 5) {
        victoria = true
        errores = 0
    } else if (intentos==0) {
        victoria = false
        errores = 11

    }

    if (letra == letraA || letra == letraB || letra == letraC || letra == letraD || letra == letraE) {
    } else {
        alert("La letra no pertenece a la palabra")
        errores = errores + 1
    }


    intentos = intentos - 1
    mostrarTexto("intentos", intentos)

    LetraRepetida()
    mostrarAhorcado()

}

mostrarAhorcado = function () {

    if (errores == 1) {
        mostrarImagen("ahorcadoImagen", "./Ahorcado_01.png")
    } else if (errores == 2) {
        mostrarImagen("ahorcadoImagen", "./Ahorcado_02.png")
    } else if (errores == 3) {
        mostrarImagen("ahorcadoImagen", "./Ahorcado_03.png")
    }
    else if (errores == 4) {
        mostrarImagen("ahorcadoImagen", "./Ahorcado_04.png")
    }
    else if (errores == 5) {
        mostrarImagen("ahorcadoImagen", "./Ahorcado_05.png")
    } else if (errores == 6) {
        mostrarImagen("ahorcadoImagen", "./Ahorcado_06.png")
    }
    else if (errores == 7) {
        mostrarImagen("ahorcadoImagen", "./Ahorcado_07.png")
    }
    else if (errores == 8) {
        mostrarImagen("ahorcadoImagen", "./Ahorcado_08.png")
    }
    else if (errores == 9) {
        mostrarImagen("ahorcadoImagen", "./Ahorcado_09.png")
    } else if (victoria == true) {
        alert("¡GANASTE!")
        mostrarImagen("ahorcadoImagen", "./ganador.gif")
    } else if (victoria == false && errores>10) {
        console.log("PERDISTE...")
        mostrarImagen("ahorcadoImagen", "./gameOver.gif")
        mostrarTexto("palabraguardada", secretWord)
    }
}



LetraRepetida = function () {

    if (letra1 >= 2 && letra2 >= 2) {
        coincidencias = coincidencias - 2
        letra1 = letra1 - 1
        letra2 = letra2 - 1
        alert("Ya se ingreso esta letra")
    } else if (letra1 >= 2 && letra3 >= 2) {
        coincidencias = coincidencias - 2
        letra1 = letra1 - 1
        letra3 = letra3 - 1
        alert("Ya se ingreso esta letra")
    } else if (letra1 >= 2 && letra4 >= 2) {
        coincidencias = coincidencias - 2
        letra1 = letra1 - 1
        letra4 = letra4 - 1
        alert("Ya se ingreso esta letra")
    } else if (letra1 >= 2 && letra5 >= 2) {
        coincidencias = coincidencias - 2
        letra1 = letra1 - 1
        letra5 = letra5 - 1
        alert("Ya se ingreso esta letra")
    } else if (letra2 >= 2 && letra3 >= 2) {
        coincidencias = coincidencias - 2
        letra2 = letra2 - 1
        letra3 = letra3 - 1
        alert("Ya se ingreso esta letra")
    } else if (letra2 >= 2 && letra4 >= 2) {
        coincidencias = coincidencias - 2
        letra2 = letra2 - 1
        letra4 = letra4 - 1
        alert("Ya se ingreso esta letra")
    } else if (letra2 >= 2 && letra5 >= 2) {
        coincidencias = coincidencias - 2
        letra2 = letra2 - 1
        letra5 = letra5 - 1
        alert("Ya se ingreso esta letra")
    } else if (letra3 >= 2 && letra4 >= 2) {
        coincidencias = coincidencias - 2
        letra3 = letra3 - 1
        letra4 = letra4 - 1
        alert("Ya se ingreso esta letra")
    } else if (letra3 >= 2 && letra5 >= 2) {
        coincidencias = coincidencias - 2
        letra3 = letra3 - 1
        letra5 = letra5 - 1
        alert("Ya se ingreso esta letra")
    } else if (letra4 >= 2 && letra5 >= 2) {
        coincidencias = coincidencias - 2
        letra4 = letra4 - 1
        letra5 = letra5 - 1
        alert("Ya se ingreso esta letra")
    } else if (letra1 >= 2) {
        coincidencias = coincidencias - 1
        letra1 = letra1 - 1
        alert("Ya se ingreso esta letra")
        letritaA = true
    } else if (letra2 >= 2) {
        coincidencias = coincidencias - 1
        letra2 = letra2 - 1
        alert("Ya se ingreso esta letra")
        letritaB = true

    } else if (letra3 >= 2) {
        coincidencias = coincidencias - 1
        letra3 = letra3 - 1
        alert("Ya se ingreso esta letra")
        letritaC = true

    } else if (letra4 >= 2) {
        coincidencias = coincidencias - 1
        letra4 = letra4 - 1
        alert("Ya se ingreso esta letra")
        letritaD = true

    } else if (letra5 >= 2) {
        coincidencias = coincidencias - 1
        letra5 = letra5 - 1
        alert("Ya se ingreso esta letra")
        letritaE = true
    }

    /////////////////////////////////////////////////////////
    ///Al ingresar una letra que ya se marco si abarca 1 o 2 espacios no aumenta las coincidencias y suelta el alert
}



