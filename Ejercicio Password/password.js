validarPass = function (password) {
    let passwordLong = password.length

    let errorM = false
    let errorD = false
    let errorDE = false
    let errorL = false

    if (passwordLong < 8 || passwordLong > 16) {
        errorL = true
         mostrarTexto("uy1"," La contraseña debe contener entre 8 y 16 caracteres. ")
    }else{mostrarTexto("uy1","")}

    for (let a = passwordLong; a > -1; a--) {
        analisisCaracteres = password.charCodeAt(a)

        if (analisisCaracteres >= 65 && analisisCaracteres <= 90 ) {
            errorM = false
            a=-1
            mostrarTexto("uy2"," ")

        } else {
            errorM = true
             mostrarTexto("uy2"," La contraseña debe contener almenos una Mayuscula. ")
        }
    }

    for (let b = passwordLong; b > -1; b--) {
        analisisCaracteres = password.charCodeAt(b)

        if (analisisCaracteres >= 48 && analisisCaracteres <= 57) {
            errorD = false
            b=-1
            mostrarTexto("uy3","")

        } else {
            errorD = true
             mostrarTexto("uy3"," La contraseña debe contener almenos un digito numérico.")
        }
    }

    for (let c = passwordLong; c > -1; c--) {
        analisisCaracteres = password.charCodeAt(c)

        if (analisisCaracteres == 42 || analisisCaracteres == 45 || analisisCaracteres == 95) {
            errorDE = false
            c=-1
            mostrarTexto("uy4","")

        } else {
            errorDE = true
             mostrarTexto("uy4"," La contraseña debe contener almenos un caracter especial como *,-,_. ")
        }

    }

    let passwordErrores

    if (errorM == false &&errorD == false &&errorDE == false && errorL == false) {
            passwordErrores=null
    }else{ passwordErrores="Contraseña invalida" }

    return passwordErrores
}

EjecutarValidacion=function(){
    let contraseña=recuperarTexto("cajita")
    let contraseñarevisada=validarPass(contraseña)

    if(contraseñarevisada==null){
        mostrarTexto("uy","La contraseña es Valida")
    }else{
        mostrarTexto("uy",contraseñarevisada)

    }

}