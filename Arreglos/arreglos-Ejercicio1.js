let notas=[];

publicarNota=function(){
    let N=recuperarInt("box");
    agregarNota(N);
}

agregarNota=function(nota){
    notas.push(nota);
}

recorrerArreglo=function(){
    let NotaPosition

    for(l=0;l<notas.length;l++){
        NotaPosition=notas[l]
    }
}

calcularPromedio=function(){
    let sumarNotas=0;
    let darPromedio;
    let NotaPosition

    for(l=0;l<notas.length;l++){
        NotaPosition=notas[l]
        sumarNotas=sumarNotas+NotaPosition
        console.log(sumarNotas)
    }

    darPromedio=sumarNotas/notas.length
    console.log(darPromedio)

    return darPromedio
}

EjecutarPromedio=function(){
    calcularPromedio()
    let Prom=calcularPromedio()
    let Promf=Prom.toFixed(2)
    mostrarTexto("boxP","Promedio: "+Promf)
}