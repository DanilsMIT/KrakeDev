validarEstructura = function (PlacaAValidarse) {
    let longPlaca = PlacaAValidarse.length
    let longitudrevisada
    let MayusculasRevisadas
    let guionRevisado
    let digitosRevisado

    if (longPlaca >= 7 && longPlaca <= 8) {
        longitudrevisada = true
        mostrarTexto("idL", "")
    } else {
        longitudrevisada = false
        mostrarTexto("idL", "ERROR*La Placa debe tener entre 7 u 8 caracteres")
    }

    let mayusUno
    let mayusDos
    let mayustres

    mayusUno = PlacaAValidarse.charCodeAt(0);
    mayusDos = PlacaAValidarse.charCodeAt(1);
    mayustres = PlacaAValidarse.charCodeAt(2);

    if (esMayuscula(mayusUno) && esMayuscula(mayusDos) && esMayuscula(mayustres)) {
        MayusculasRevisadas = true
        mostrarTexto("idM", "")
    } else {
        MayusculasRevisadas = false
        mostrarTexto("idM", "ERROR*Los 3 primeros digitos son mayúsculas")
    }

    let guioncito
    guioncito = PlacaAValidarse.charCodeAt(3);

    if (esGuion(guioncito) == true) {
        guionRevisado = true
        mostrarTexto("idG", "")
    } else {
        guionRevisado = false
        mostrarTexto("idG", "ERROR*Una letras y números con un guión")
    }

    let digitilloUno
    let digitilloDos
    let digitilloTres
    let digitillocuatro

    if (longPlaca == 7 && guionRevisado == true) {
        digitilloUno = PlacaAValidarse.charCodeAt(4)
        digitilloDos = PlacaAValidarse.charCodeAt(5)
        digitilloTres = PlacaAValidarse.charCodeAt(6)
    }

    if (esDigito(digitilloUno) && esDigito(digitilloDos) && esDigito(digitilloTres)) {
        digitosRevisado = true
    } else {
        digitosRevisado = false

    }

    if (longPlaca == 8 && guionRevisado == true) {
        digitilloUno = PlacaAValidarse.charCodeAt(4)
        digitilloDos = PlacaAValidarse.charCodeAt(5)
        digitilloTres = PlacaAValidarse.charCodeAt(6)
        digitillocuatro = PlacaAValidarse.charCodeAt(7)
    }

    if (esDigito(digitilloUno) && esDigito(digitilloDos) && esDigito(digitilloTres) && esDigito(digitillocuatro)) {
        digitosRevisado = true
    } else {
        digitosRevisado = false
    }

    if (digitosRevisado == false) {
        mostrarTexto("idD", "ERROR*Los ultimos digitos solo permite números o faltan")
    } else {
        mostrarTexto("idD", "")
    }

    if (longPlaca >= 9) {
        mostrarTexto("idD", "ERROR*Los números exceden o no son números")
    }

    let EstructuraAprobada
    if (longitudrevisada == true && MayusculasRevisadas == true && guionRevisado == true && digitosRevisado == true) {
        EstructuraAprobada = null
    } else { EstructuraAprobada = false }

    return EstructuraAprobada
}


obtenerProvincia = function (Placa) {
    let PPlaca = Placa.charCodeAt(0)

    let PronvinciaIdentificada
    if (PPlaca == 65) {
        PronvinciaIdentificada = "Azuay"
    } else if (PPlaca == 66) {
        PronvinciaIdentificada = "Bolivar"
    } else if (PPlaca == 85) {
        PronvinciaIdentificada = "Cañar"
    } else if (PPlaca == 67) {
        PronvinciaIdentificada = "Carchi"
    } else if (PPlaca == 88) {
        PronvinciaIdentificada = "Cotopaxi"
    } else if (PPlaca == 72) {
        PronvinciaIdentificada = "Chimborazo"
    } else if (PPlaca == 79) {
        PronvinciaIdentificada = "El Oro"
    } else if (PPlaca == 69) {
        PronvinciaIdentificada = "Esmeraldas"
    } else if (PPlaca == 87) {
        PronvinciaIdentificada = "Galápagos"
    } else if (PPlaca == 71) {
        PronvinciaIdentificada = "Guayas"
    } else if (PPlaca == 73) {
        PronvinciaIdentificada = "Imbabura"
    } else if (PPlaca == 76) {
        PronvinciaIdentificada = "Loja"
    } else if (PPlaca == 82) {
        PronvinciaIdentificada = "Los Ríos"
    } else if (PPlaca == 77) {
        PronvinciaIdentificada = "Manabí"
    } else if (PPlaca == 86) {
        PronvinciaIdentificada = "Morona Santiago"
    } else if (PPlaca == 78) {
        PronvinciaIdentificada = "Napo"
    } else if (PPlaca == 83) {
        PronvinciaIdentificada = "Pastaza"
    } else if (PPlaca == 80) {
        PronvinciaIdentificada = "Pichincha"
    } else if (PPlaca == 75) {
        PronvinciaIdentificada = "Sucumbíos"
    } else if (PPlaca == 81) {
        PronvinciaIdentificada = "Orellana"
    } else if (PPlaca == 84) {
        PronvinciaIdentificada = "Tungurahua"
    } else if (PPlaca == 90) {
        PronvinciaIdentificada = "Zamora Chinchipe"
    } else if (PPlaca == 89) {
        PronvinciaIdentificada = "Santa Elena"
    } else { PronvinciaIdentificada = "No se encuentra registrada" }

    return PronvinciaIdentificada
}

obtenerTipoVehiculo = function (placa) {
    let TPlaca = placa.charCodeAt(1)

    let TipoIdentificado
    if (TPlaca == 65 || TPlaca == 90) {
        TipoIdentificado = "Vehículo comercial"
    } else if (TPlaca == 69) {
        TipoIdentificado = "Vehículo gubernamental"
    }else if (TPlaca == 83) {
        TipoIdentificado = "Vehículo de gobierno provincial"
    }else if (TPlaca == 77) {
        TipoIdentificado = "Vehículo municipal"
    }else{TipoIdentificado = "Vehículo privado"}

    return TipoIdentificado
}

DiaPicoyPlaca=function(placa){
    let PPlaca=placa.length-1
    let digitoASCII=placa.charCodeAt(PPlaca)

    let diaPicoyPLaca 
    if(digitoASCII==49 || digitoASCII==50){
        diaPicoyPLaca="Lunes"
    }else if(digitoASCII==51 || digitoASCII==52){
        diaPicoyPLaca="Martes"
    }else if(digitoASCII==53 || digitoASCII==54){
        diaPicoyPLaca="Miércoles"
    }else if(digitoASCII==55 || digitoASCII==56){
        diaPicoyPLaca="Jueves"
    }else if(digitoASCII==57 || digitoASCII==48){
        diaPicoyPLaca="Viernes"
    }else{diaPicoyPLaca=""}

    return diaPicoyPLaca
}