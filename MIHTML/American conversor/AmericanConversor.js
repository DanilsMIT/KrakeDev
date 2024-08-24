DIVdistancia = function () {
    mostrarComponente("Distancia")
    ocultarComponente("Temperatura")
    ocultarComponente("Peso")

    mostrarComponente("flexito")
    divPC()
}
DIVtemperatura=function(){
    mostrarComponente("Temperatura")
    ocultarComponente("Distancia")
    ocultarComponente("Peso")

    divCF()
}
DIVpeso=function(){
    mostrarComponente("Peso")
    ocultarComponente("Temperatura")
    ocultarComponente("Distancia")

    divOG()
}

/////////////////////////////////////DIV DISTANCIA
divPC=function(){
    mostrarComponente("flexito")
    mostrarComponente("ds1")
    ocultarComponente("ds2")
    ocultarComponente("ds3")
}
divPM=function(){
    mostrarComponente("flexito")
    mostrarComponente("ds2")
    ocultarComponente("ds1")
    ocultarComponente("ds3")
}
divMK=function(){
    mostrarComponente("ds3")
    ocultarComponente("ds2")
    ocultarComponente("ds1")
    ocultarComponente("flexito")

}
//////////////////////////////////DIV TEMPERATURA
divCF=function(){
    mostrarComponente("ts1")
    ocultarComponente("ts2")
}
divGL=function(){
    mostrarComponente("ts2")
    ocultarComponente("ts1")
}
///////////////////////////////DIV PESO
divOG=function(){
    mostrarComponente("ps1")
    ocultarComponente("ps2")
}
divLKg=function(){
    mostrarComponente("ps2")
    ocultarComponente("ps1")
}

////////////////////////////////////////////////////////////////////////////////CALCULADORAS