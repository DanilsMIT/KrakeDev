calcularPromedioNotas=function(){

    let nota1=recuperarFloat("N1");
    let nota2=recuperarFloat("N2");
    let nota3=recuperarFloat("N3");

    let p=calcularPromedio(nota1,nota2,nota3);
    let fixedp=p.toFixed(2);

    let boxmsg=("Su promedio es: "+fixedp)
    mostrarTexto("promresult",boxmsg)

    if(fixedp<5 && fixedp>0){
        mostrarTexto("ARE","REPROBADO")
        mostrarImagen("picture","./reprobado.gif")
    }else if(fixedp>=5 && fixedp<=8){
        mostrarTexto("ARE","BIEN HECHO")
        mostrarImagen("picture","./gil-catsucess.gif")
    }else if(fixedp>8 && fixedp<=10){
        mostrarTexto("ARE","SOBRESALIENTE")
        mostrarImagen("picture","./excelente.gif")
    }else{
        mostrarTexto("ARE","DATOS ERRONEOS")
        mostrarImagen("picture","./error.gif")
    }
}