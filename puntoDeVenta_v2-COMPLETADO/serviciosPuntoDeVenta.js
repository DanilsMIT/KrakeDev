calcularValorIVA = function (valorsubreal) {
    let ivaT = valorsubreal * 0.12
    return ivaT
}

calcularValorSubtotal = function (precio, cantidad) {
    let Vsubtotal = precio * cantidad
    return Vsubtotal
}

calcularTotal = function (subtotal, descuento, iva) {
    let Vtotal = (subtotal - descuento) + iva
    return Vtotal
}

calcularDescuentoPorMonto = function (subtotal, cantidades) {
    let descuentoMonto

    if (cantidades >= 3 && cantidades < 6) {
        descuentoMonto = subtotal * 0.03
    } else if (cantidades >= 6 && cantidades < 12) {
        descuentoMonto = subtotal * 0.04
    } else if (cantidades > 12) {
        descuentoMonto = subtotal * 0.05
    } else {
        descuentoMonto = 0
    }

    return descuentoMonto
}


esProductoInvalido = function (Producto) {
    let longProduct = Producto.length

    if (longProduct > 10) {
        mostrarTexto("lblError3", "El producto no es válido")
        erroR = true
    }else{
        mostrarTexto("lblError3", "")
    }

}

esCantidadInvalida = function (cantidades) {
    let erroR = false
    let Scantidad

    if (isNaN(cantidades)) {
        mostrarTexto("lblError1", "No es un número")
        erroR = true
    } else if (cantidades > 100 || cantidades < 0) {
        mostrarTexto("lblError1", "Excede o no es correcto")
        erroR = true
    }else{
        mostrarTexto("lblError1", "")
    }

    if (erroR == false) {
        Scantidad = cantidades
    }

    return Scantidad
}

esPrecioInvalido = function (precio) {
    let erroR = false
    let Sprecio

    if (isNaN(precio)) {
        mostrarTexto("lblError2", "No es un número")
        erroR = true
    } else if (precio > 50 || precio < 0) {
        mostrarTexto("lblError2", "Excede o no es correcto")
        erroR = true
    }else{
        mostrarTexto("lblError2", "")
    }

    if (erroR == false) {
        Sprecio = precio
    }

    return Sprecio
}