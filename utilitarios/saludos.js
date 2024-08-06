saludos=function(){
    let caja=recuperarcmptexto("boxtxt")
    let cajaA=recuperarcmptexto("boxtxtA")
    let cajaB=recuperarcmpINT("boxtxtB")
    let cajaC=recuperarcmpFLOAT("boxtxtC")

    let result=(caja+" "+cajaA)
    showtext("showresult",result)

    showpicture("img","./picturesU/gatogolpes.gif")

    showtxtinbox("boxtxt","")

    console.log(caja,cajaA,cajaB,cajaC)
}