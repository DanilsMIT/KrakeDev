let secretWord;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

let letra1=""
let letra2=""
let letra3=""
let letra4=""
let letra5=""

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


    if (palabraValida == true && longValida == true) {
        secretWord = word
        console.log(secretWord)
    } else {
        secretWord = null
        console.log(secretWord)
        alert("¡LA PALABRA SOLO SE COMPONE DE 5 LETRAS MAYÚSCULAS!")
    }
}

showLetra = function (letra, posicion) {


    if (posicion == 0) {
        mostrarTexto("div0", letra)
        letra1=letra
    } else if (posicion == 1) {
        mostrarTexto("div1", letra)
        letra2=letra
    } else if (posicion == 2) {
        mostrarTexto("div2", letra)
        letra3=letra
    } else if (posicion == 3) {
        mostrarTexto("div3", letra)
        letra4=letra
    } else if (posicion == 4) {
        mostrarTexto("div4", letra)
        letra5=letra
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
            a = 5
        }

    }

    if (letra != compararLetra) {
        alert("La letra no se encuentra en la palabra")
        errores = errores + 1
    } 
}

IngresarLetra = function () {
    let letra = recuperarTexto("txtLetra")

    if (esMayuscula(letra)) {
        validarLetra(letra)
    } else { alert("¡SOLO SE JUEGA CON LETRAS MAYÚSCULAS!") }

    if (coincidencias == 5) {
        victoria=true
    } else if (intentos == 10) {
        victoria=false
    }



    intentos = intentos + 1
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
    }else if(victoria==true){
        alert("¡GANASTE!")
        mostrarImagen("ahorcadoImagen", "./ganador.gif")
    }else if(victoria==false){
        console.log("PERDISTE...")
        mostrarImagen("ahorcadoImagen", "./gameOver.gif")
        mostrarTexto("palabraguardada", secretWord)
    }
}

