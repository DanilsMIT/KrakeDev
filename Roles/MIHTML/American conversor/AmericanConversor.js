DIVdistancia = function () {
    mostrarComponente("Distancia")
    ocultarComponente("Temperatura")
    ocultarComponente("Peso")

    mostrarComponente("flexito")
    divPC()
}
DIVtemperatura = function () {
    mostrarComponente("Temperatura")
    ocultarComponente("Distancia")
    ocultarComponente("Peso")

    divCF()
}
DIVpeso = function () {
    mostrarComponente("Peso")
    ocultarComponente("Temperatura")
    ocultarComponente("Distancia")

    divOG()
}

/////////////////////////////////////DIV DISTANCIA
divPC = function () {
    mostrarComponente("flexito")
    mostrarComponente("ds1")
    ocultarComponente("ds2")
    ocultarComponente("ds3")
}
divPM = function () {
    mostrarComponente("flexito")
    mostrarComponente("ds2")
    ocultarComponente("ds1")
    ocultarComponente("ds3")
}
divMK = function () {
    mostrarComponente("ds3")
    ocultarComponente("ds2")
    ocultarComponente("ds1")
    ocultarComponente("flexito")

}
//////////////////////////////////DIV TEMPERATURA
divCF = function () {
    mostrarComponente("ts1")
    ocultarComponente("ts2")
}
divGL = function () {
    mostrarComponente("ts2")
    ocultarComponente("ts1")
}
///////////////////////////////DIV PESO
divOG = function () {
    mostrarComponente("ps1")
    ocultarComponente("ps2")
}
divLKg = function () {
    mostrarComponente("ps2")
    ocultarComponente("ps1")
}

////////////////////////////////////////////////////////////////////////////////CALCULADORAS
///DISTANCIAS
//Pulgada-cm
PtoC = function () {
    let pulgada = recuperarFloat("pulgada")
    let centimetros = pulgada * 2.54
    let fixed = centimetros.toFixed(2)
    mostrarTexto("resultado ptc", fixed + " cm")
}
CtoP = function () {
    let centimetros = recuperarFloat("cm")
    let pulgada = centimetros / 2.54
    let fixed = pulgada.toFixed(2)
    mostrarTexto("resultado ctp", fixed + " ''")
}
//Pie-m
PtoM = function () {
    let pie = recuperarFloat("pie")
    let metro = pie * 0.3048
    let fixed = metro.toFixed(2)
    mostrarTexto("resultado ptc2", fixed + " m")
}

MtoP = function () {
    let metro = recuperarFloat("m")
    let pie = metro / 0.3048
    let fixed = pie.toFixed(2)
    mostrarTexto("resultado ctp2", fixed + " pies")
}
//Milla-km
Mtokm = function () {
    let milla = recuperarFloat("milla")
    let km = milla * 1.60934
    let fixed = km.toFixed(2)
    mostrarTexto("resultado ptc3", fixed + " km")
}
kmtoM = function () {
    let km = recuperarFloat("km")
    let milla = km / 1.60934
    let fixed = milla.toFixed(2)
    mostrarTexto("resultado ctp3", fixed + " millas")
}
//flexometro
PulgadaDecimal = function () {
    let pulgada = recuperarInt("pulgadaInt")
    let n = recuperarInt("numerador")
    let d = recuperarInt("denominador")

    let DDD = n / d
    let pulgadaD = pulgada + DDD
    let fixed = pulgadaD.toFixed(2)
    mostrarTexto("resultado flexo", fixed + " ''")
}

///TEMPERATURA
//F-C
FtoC = function () {
    let f = recuperarFloat("F")
    let c = (f - 32) * 5 / 9;
    let fixed = c.toFixed(2)
    mostrarTexto("resultado pt", fixed + " °C")
}
CtoF = function () {
    let c = recuperarFloat("C")
    let f = (c * 9 / 5) + 32;
    let fixed = f.toFixed(2)
    mostrarTexto("resultado ct", fixed + " °F")
}
//Galones-lt
GtoLT = function () {
    let f = recuperarFloat("g")
    let c = f * 3.78541
    let fixed = c.toFixed(2)
    mostrarTexto("resultado pt2", fixed + " lt")
}
LTtoG = function () {
    let c = recuperarFloat("lt")
    let f = c * 0.264172
    let fixed = f.toFixed(2)
    mostrarTexto("resultado ct2", fixed + " galones")
}
///PESO
//onza-gr
OtoGR = function () {
    let f = recuperarFloat("o")
    let c = f * 28.3495
    let fixed = c.toFixed(2)
    mostrarTexto("resultado tc", fixed + " gr")
}
GRtoO = function () {
    let c = recuperarFloat("gr")
    let f = c * 0.03527396
    let fixed = f.toFixed(2)
    mostrarTexto("resultado tp", fixed + " onzas")
}
//lb-kg
LBtoKG = function () {
    let f = recuperarFloat("lb")
    let c = f * 0.453592
    let fixed = c.toFixed(2)
    mostrarTexto("resultado tc2", fixed + " kg")
}
KGtoLB = function () {
    let c = recuperarFloat("kg")
    let f = c * 2.20462
    let fixed = f.toFixed(2)
    mostrarTexto("resultado tp2", fixed + " lb")
}