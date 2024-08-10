calcularTasaInteres=function(ingresoAnual){

    let ingresoAnualF=parseFloat(ingresoAnual)

    let tasaDeInteres

    if(ingresoAnualF<300000){
        tasaDeInteres=0.16
        console.log("Tasa de interes: 16%")
    }else if(ingresoAnualF>=300000 && ingresoAnualF<500000){
        tasaDeInteres=0.15
        console.log("Tasa de interes: 15%")
    }else if(ingresoAnualF>=500000 && ingresoAnualF<1000000){
        tasaDeInteres=0.14
        console.log("Tasa de interes: 14%")
    }else if(ingresoAnualF>=1000000 && ingresoAnualF<2000000){
        tasaDeInteres=0.13
        console.log("Tasa de interes: 13%")
    }else if(ingresoAnualF>=2000000){
        tasaDeInteres=0.12
        console.log("Tasa de interes: 12%")
    }

    return tasaDeInteres
}

calcularCapacidadPago=function(age,ingreso,egreso){

    let Iage=parseInt(age)
    let IngresoF=parseFloat(ingreso)
    let EgresoF=parseFloat(egreso)

    let montoRestante=IngresoF-EgresoF
    let CapacityToPay
    if(Iage<=50){
    CapacityToPay=montoRestante*0.40
    console.log("Capacidad de Pago: 40%")

    }else if(Iage>50){
    CapacityToPay=montoRestante*0.30
    console.log("Capacidad de Pago: 30%")
    }

    console.log("Se cobrara:"+CapacityToPay)
    return CapacityToPay
}

calcularDescuento=function(precio,cantidades){
   
    let precioF=parseFloat(precio)
    let Icantidades=parseInt(cantidades)

    let MontoInicial=precioF*Icantidades;
    let descuento
    let MontoFinal
    if(cantidades<3){
        console.log("No tiene descuento")

        MontoFinal=MontoInicial

        console.log("Pago final: "+MontoFinal)
    }else if(cantidades>=3 && cantidades<=5){
        console.log("Descuento del 2%")

        descuento=MontoInicial*0.02
        MontoFinal=MontoInicial-descuento

        console.log("Pago final: "+MontoFinal)
    }else if(cantidades>=6 && cantidades<12){
        console.log("Descuento del 3%")

        descuento=MontoInicial*0.03
        MontoFinal=MontoInicial-descuento

        console.log("Pago final: "+MontoFinal)
    }else if(cantidades>=12){
        console.log("Descuento del 4%")

        descuento=MontoInicial*0.04
        MontoFinal=MontoInicial-descuento

        console.log("Pago final: "+MontoFinal)
    }

    return MontoFinal
}

determinarColesterolLDL=function(colesterolTotal){

    let colesterolTotalF=parseFloat(colesterolTotal);

    let LDL
    if(colesterolTotalF<200){
        LDL="Niveles de Colesterol LDL podrian ser: Deseables"
    }else if(colesterolTotalF>=200 && colesterolTotalF<240){
        LDL="Niveles de Colesterol LDL podrian ser: Mas de lo normal"
    }else if(colesterolTotalF>240){
        LDL="Niveles de Colesterol LDL podrian ser: Altos"
    }

    console.log(LDL)
    return LDL
}

validarClave=function(clave){

    let claveN=clave.length

    let booleanclave
    if(claveN>=8 && claveN<=16){
        booleanclave= true
    }else{booleanclave=false}

    console.log(booleanclave)
    return booleanclave
}

esMayuscula=function(letraM){

    let mayusYN=letraM.charCodeAt(0)
    let TFmayus
    if(mayusYN>=65 && mayusYN<=90){
        TFmayus=true
    }else{TFmayus=false}

    console.log(TFmayus)
    return TFmayus
}

esMinuscula=function(letram){
    letram="ó"
    
    let mayusYN=letram.charCodeAt(0);
    console.log(mayusYN)
    let TFmayus
    if(mayusYN>=97 && mayusYN<=122 || mayusYN>=160 && mayusYN<=163 || mayusYN>=225 && mayusYN<=250){
        TFmayus=true
    }else{TFmayus=false}

    console.log(TFmayus)
    return TFmayus
}

esDigito=function(digito){
    let mayusYN=digito.charCodeAt(0);
    console.log(mayusYN)
    let TFmayus
    if(mayusYN>=48&& mayusYN<=57){
        TFmayus=true
    }else{TFmayus=false}

    console.log(TFmayus)
    return TFmayus
}

darPermiso=function(nMate,nFisica,nGeometria){
    let nMateF=parseFloat(nMate);
    let nFisicaF=parseFloat(nFisica);
    let nGeometriaF=parseFloat(nGeometria);

    let permiso
    if(nMateF>90 || nFisicaF>90 || nGeometriaF>90){
        permiso=true
    }else{permiso=false}
    return permiso

}

otorgarPermiso=function(nMate,nFisica,nGeometria){
    let nMateF=parseFloat(nMate);
    let nFisicaF=parseFloat(nFisica);
    let nGeometriaF=parseFloat(nGeometria);

    let permiso
    if(nMateF>90 || nFisicaF>90 && nGeometriaF>80){
        permiso=true
    }else{permiso=false}
    return permiso

}

dejarSalir=function(nMate,nFisica,nGeometria){
    nFisica="93"
    nMate="92"
    nGeometria="98"

    let nMateF=parseFloat(nMate);
    let nFisicaF=parseFloat(nFisica);
    let nGeometriaF=parseFloat(nGeometria);

    let permiso
    if(nFisicaF>nMateF && nGeometriaF>90 || nFisicaF>nMateF && nFisicaF>90 || nFisicaF>nMateF && nMateF>90){
        permiso=true
    }else{permiso=false}
    console.log(permiso)
    return permiso
}


