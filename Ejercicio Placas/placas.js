validarPlaca = function () {

    let placabox = recuperarTexto("idbox")
    let placarevisada = validarEstructura(placabox)
    let placaprovincia = obtenerProvincia(placabox)
    let placatipo = obtenerTipoVehiculo(placabox)
    let placadiapico = DiaPicoyPlaca(placabox)
    if (placarevisada == null) {
        mostrarTexto("idTop", "Estructura: Valida")
        mostrarTexto("Provincia", "Provincia:" + placaprovincia)
        mostrarTexto("Tipo", "Tipo: " + placatipo)
        mostrarTexto("Pico", "Pico y Placa: " + placadiapico)
    } else {
        mostrarTexto("idTop", "Estructura: Invalida")
        mostrarTexto("Provincia", "Provincia: No es una Placa valida")
        mostrarTexto("Tipo", "Tipo: No es una Placa valida")
        mostrarTexto("Pico", "Pico y Placa: No es una Placa valida")
    }


}

clean = function () {
    mostrarTexto("idTop", "Estructura:")
    mostrarTexto("Provincia", "Provincia:")
    mostrarTexto("Tipo", "Tipo:")
    mostrarTexto("Pico", "Pico y Placa:")

    mostrarTextoEnCaja("idbox","")
}