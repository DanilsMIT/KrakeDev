recuperarcmptexto=function(idtxtcomponente){
    let recovertxt
    let txt
    recovertxt=document.getElementById(idtxtcomponente)
    txt=recovertxt.value; 

    return txt 
}

saludos=function(){
    let caja=recuperarcmptexto("boxtxt")
    let cajaA=recuperarcmptexto("boxtxtA")
}
