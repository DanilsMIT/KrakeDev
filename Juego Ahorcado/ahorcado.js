let secretWord


esMayuscula = function (letra) {
    let asciiLetra=letra.charCodeAt(0)

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
        for (w = 0; w <wordLong; w++) {
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
        alert("¡La palabra solo se compone de 5 caracteres mayúsculas!")
    }
}