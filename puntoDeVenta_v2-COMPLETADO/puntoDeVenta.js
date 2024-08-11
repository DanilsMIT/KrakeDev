calcularValorTotal = function () {
    
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto
    let precioProductoS // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidadeS // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //variables para almacenar los retornos de las funciones
    let valorSubtotal
    let valorDescuento
    let valorIVA
    let valorTotal
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProductoS = recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidadeS = recuperarInt("txtCantidad");
    //4. Recuperar el porcentaje de descuento como int

    esProductoInvalido(nombreProducto)
    let cantidad = esCantidadInvalida(cantidadeS);
    let precioProducto= esPrecioInvalido(precioProductoS)





    valorSubtotal = calcularValorSubtotal(precioProducto, cantidad);
    let subtotalR= valorSubtotal.toFixed(2)
    mostrarTexto("lblSubtotal", subtotalR)

    valorDescuento = calcularDescuentoPorMonto(valorSubtotal, cantidad);
    let descuentoR=valorDescuento.toFixed(2)
    mostrarTexto("lblDescuento", descuentoR)

    let valorSubDescuento = valorSubtotal - valorDescuento
    valorIVA = calcularValorIVA(valorSubDescuento);
    let ivaR=valorIVA.toFixed(2)
    mostrarTexto("lblValorIVA", ivaR)




    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA)
    let totalR= valorTotal.toFixed(2)
    mostrarTexto("lblTotal", totalR)

}

limpiar = function () {
 
    let ctxt = ("...");
    let cnI = ("0");
    let cnF = ("0.00");

    mostrarTextoEnCaja("txtProducto", ctxt);
    mostrarTextoEnCaja("txtCantidad", cnI);
    mostrarTextoEnCaja("txtPrecio", cnF);

    mostrarTexto("lblSubtotal",cnF);
    mostrarTexto("lblDescuento",cnF);
    mostrarTexto("lblValorIVA",cnF);
    mostrarTexto("lblTotal",cnF);
}
/* SI TODO FUNCIONA, HACER UN PUSH */