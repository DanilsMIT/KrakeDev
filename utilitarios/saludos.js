recuperarcmptexto=function(idtxtcomponente){
    let recovertxt
    let txt
    recovertxt=document.getElementById(idtxtcomponente)
    txt=recovertxt.value; 

    return txt 
}

recuperarcmpINT=function(idNIcomponente){
    let recovertxtN = recuperarcmptexto(idNIcomponente);
    let txtINT= parseInt(recovertxtN)
    return txtINT
}

recuperarcmpFLOAT=function(idNFcomponente){
    let recovertxtNF= recuperarcmptexto(idNFcomponente);
    let txtFLOAT=parseFloat(recovertxtNF)
    return txtFLOAT
}

saludos=function(){
    let caja=recuperarcmptexto("boxtxt")
    let cajaA=recuperarcmptexto("boxtxtA")
    let cajaB=recuperarcmpINT("boxtxtB")
    let cajaC=recuperarcmpFLOAT("boxtxtC")

    let result=(caja+" "+cajaA)
    showtext("showresult",result)

    console.log(caja,cajaA,cajaB,cajaC)
}

showtext=function(idtxt,message){
    let boxrecover = document.getElementById(idtxt);
    boxrecover.innerText=message
}