calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto
    let precioProducto // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //variables para almacenar los retornos de las funciones
    let valorSubtotal
    let valorDescuento
    let valorIVA
    let valorTotal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //1. Recuperar el nombre del producto como String
    nombreProducto=recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto=recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad=recuperarInt("txtCantidad");
    //4. Recuperar el porcentaje de descuento como int
    porcentajeDescuento=recuperarInt("txtPorcentajeDescuento")


    //5. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    valorSubtotal=calcularValorSubtotal(precioProducto,cantidad);
    //6. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
    mostrarTexto("lblSubtotal",valorSubtotal)




    //7. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
    valorDescuento=calcularValorDescuento(valorSubtotal,porcentajeDescuento);
    //8. Mostrar el resultado en el componente lblDescuento
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    mostrarTexto("lblDescuento",valorDescuento)
    




    //9. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    let valorSubDescuento=valorSubtotal-valorDescuento
    valorIVA=calcularValorIVA(valorSubDescuento);
   
    //10. Mostrar el resultado en el componente lblValorIVA    
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
    mostrarTexto("lblValorIVA",valorIVA)




    //11. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA)
    //12. Mostrar el resultado en el componente lblTotal
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
    mostrarTexto("lblTotal",valorTotal)
    


    //13. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */
    let resumen=("Valor total a pagar por "+cantidad+" "+nombreProducto+" con un "+porcentajeDescuento+"%"+" de descuento, incluido su IVA, son: "+valorTotal+"$")
    mostrarTexto("lblResumen",resumen)

    limpiar();

}

limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    let ctxt=("");
    let cnI=("0"); 
    let cnF=("0.0");

    let clean1=mostrarTextoEnCaja("txtProducto",ctxt);
    let clean2=mostrarTextoEnCaja("txtCantidad",cnI);
    let clean3=mostrarTextoEnCaja("txtPrecio",cnF);
    let clean4=mostrarTextoEnCaja("txtPorcentajeDescuento",cnI);

    let clean5=mostrarTexto("lblSubtotal",cnF);
    let clean6=mostrarTexto("lblDescuento",cnF);
    let clean7=mostrarTexto("lblValorIVA",cnF);
    let clean8=mostrarTexto("lblTotal",cnF);
} 
/* SI TODO FUNCIONA, HACER UN PUSH */