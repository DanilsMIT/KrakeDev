calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;


    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");

    showErroR(nota1, "lblError1")
    showErroR(nota2, "lblError2")
    showErroR(nota3, "lblError3")


    if (showErroR(nota1, "lblError1") & showErroR(nota2, "lblError2") & showErroR(nota3, "lblError3")
    ) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    } else {
        mostrarTexto("lblResultado", "...")
    }
}

showErroR = function (nota, idErroR) {
    let erroR = false

    if (isNaN(nota)) {
        mostrarTexto(idErroR, "No es un número")
        erroR = true
    } else if (nota < 0 || nota > 10) {
        mostrarTexto(idErroR, "No esta en un rango de 0 y 10")
        erroR = true
    } else {
        mostrarTexto(idErroR, "")
    }

    return !erroR
}


