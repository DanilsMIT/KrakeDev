esMayuscula = function (letraM) {

    let TFmayus
    if (letraM>= 65 && letraM <= 90) {
        TFmayus = true
    } else { TFmayus = false }

    return TFmayus
}

esDigito = function (placa) {

    let TFmayus
    if(isNaN(placa)){
        TFmayus = false
    }else if (placa >= 48 && placa <= 57) {
        TFmayus = true
    } else { TFmayus = false }

    return TFmayus
}

esGuion = function (guion) {

    let TFmayus
    if (guion == 45) {
        TFmayus = true
    } else { guion = false }

    return TFmayus
}