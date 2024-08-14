esMayuscula=function(letra){
    let asciiLetra=letra.charCodeAt(0)

    let Mayuscula
    if(asciiLetra>=65 && asciiLetra<=90){
        Mayuscula=true
    }else{Mayuscula=false}

    return Mayuscula
}