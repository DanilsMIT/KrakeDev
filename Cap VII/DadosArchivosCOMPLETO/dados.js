jugar=function(){
  let ndado=tirardado()
  cambiarTexto("lblNumero",ndado)

  if(ndado>3) {
    cambiarTexto("lblMensaje","Que suerte!")
 }else{cambiarTexto("lblMensaje","Que salado,bro!")
 
 }

}

tirardado=function(){
    let random= Math.random()
    let randomproducto= random*6
    let intrandom= parseInt(randomproducto)
    let rangerandom= intrandom+1

    return rangerandom
}
