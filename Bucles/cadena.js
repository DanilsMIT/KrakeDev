ejecutarPrueba=function(){
    let cadenar=recuperarTexto("cajitacadena")

    let show=invertirCadena (cadenar)

    mostrarTexto("showinvertion",show)
}



invertirCadena =function(cadena){
    let result=("")
    let caracterinverso
    let caracter=cadena.length
    for(letra=caracter;letra>-1;letra--){
        caracterinverso=cadena.charAt(letra)
        result=result+caracterinverso
    }
    return result
}
