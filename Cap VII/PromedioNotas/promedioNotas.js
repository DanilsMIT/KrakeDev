calcularPromedioNotas=function(){

    let nota1=recuperarFloat("N1");
    let nota2=recuperarFloat("N2");
    let nota3=recuperarFloat("N3");

    let p=calcularPromedio(nota1,nota2,nota3);
    let fixedp=p.toFixed(2);

    let boxmsg=("Su promedio es: "+fixedp)
    let recoverbox
    recoverbox=mostrarTexto("promresult",boxmsg)

    if(fixedp>6.99){
        mostrarImagen("picture","./gil-catsucess.gif")
     }else{mostrarImagen("picture","./u died.gif")}

}