calcularValorDescuento=function(montosubtotal,descuento){
    let descuentoT=descuento/100
    let Vdescuento=montosubtotal*descuentoT
    return Vdescuento
}

calcularValorIVA=function(valorsubreal){
    let ivaT=valorsubreal*0.12
    return ivaT
}

calcularValorSubtotal=function(precio,cantidad){
    let Vsubtotal=precio*cantidad
    return Vsubtotal
}

calcularTotal=function(subtotal,descuento,iva){
    let Vtotal= (subtotal-descuento)+iva
    return Vtotal
}