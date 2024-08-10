let puntos=0
let intentos=3
let puntajefinal
jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
   
    showdado(resultado);
    puntuacion(resultado);
    intento();
}

puntuacion=function(number){

    puntos=puntos+number
    cambiarTexto("punto",puntos)

  

    if(intentos==3){
        cambiarTexto("finm","")
        cambiarTexto("fin","")
    }else if(intentos==2){
        cambiarTexto("finm","")
        cambiarTexto("fin","")
    }else if(intentos==1){
        cambiarTexto("finm","")
        cambiarTexto("fin","")}
}

        
intento=function(){
    intentos=intentos-1
    cambiarTexto("intento",intentos)

    if(intentos==0){
    cambiarTexto("fin","GameOver")
        puntajefinal=puntos
        cambiarTexto("pfinal","Ultimo Puntaje")
        cambiarTexto("puntoF",puntajefinal)
        clean()
    }
}

clean=function(){
    cambiarImagen("picturedado","")
    cambiarTexto("intento","3")
    cambiarTexto("punto","0")
    if(intentos==0){
        intentos=3
        puntos=0
    }

    if(puntajefinal>=10){
        cambiarTexto("finm","Ganaste")
        }else{
        cambiarTexto("finm","Perdiste")
        }
}


showdado=function(result){
    if(result==1){
        cambiarImagen("picturedado","./dados1.png" )
    }else if(result==2){
        cambiarImagen("picturedado","./dados2.png")
    }else if(result==3){
        cambiarImagen("picturedado","./dados3.png")
    }else if(result==4){
        cambiarImagen("picturedado","./dados4.png")
    }else if(result==5){
        cambiarImagen("picturedado","./dados5.png")
    }else if(result==6){
        cambiarImagen("picturedado","./dados6.png")
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}
