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
        alert("¡LA PALABRA SOLO SE COMPONE DE 5 LETRAS MAYÚSCULAS!")
    }
}

showLetra=function(letra,posicion){


    if(posicion==0){
        mostrarTexto("div0",letra)
    }else if(posicion==1){
        mostrarTexto("div1",letra)
    }else if(posicion==2){
        mostrarTexto("div2",letra)
    }else if(posicion==3){
        mostrarTexto("div3",letra)
    }else if(posicion==4){
        mostrarTexto("div4",letra)
    }

}

validarLetra=function(letra){
let letrasEncontradas

let compararLetra
for(a=0;a>secretWord.length;a++){
    compararLetra=secretWord.charAt(a)

    if(letra==compararLetra){
        showLetra(letra,a)
        letrasEncontradas=letrasEncontradas+1
    }
}

}

IngresarLetra=function(){
    let letra=recuperarTexto("txtLetra")

    if(esMayuscula(letra)){
        validarLetra(letra)
    }else{alert("¡SOLO SE JUEGA CON LETRAS MAYÚSCULAS!")}

}