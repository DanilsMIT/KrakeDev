recuperarcmptexto=function(idtxtcomponente){
    let recovertxt=document.getElementById(idtxtcomponente)
    let txt=recovertxt.value; 
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

showtext=function(idtxt,message){
    let boxrecover = document.getElementById(idtxt);
    boxrecover.innerText=message
}

showpicture=function(idpicture,picture){
let recoverimg = document.getElementById(idpicture)
recoverimg.src= picture
}

showtxtinbox=function(idtxt,change){
    let recoverbox=document.getElementById(idtxt)
    recoverbox.value=change
}

