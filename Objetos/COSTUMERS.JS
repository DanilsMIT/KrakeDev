let clientes = [
    { Ci: "121212", name: "ElPEPE", age: 40 },
    { Ci: "131313", name: "ETESECH", age: 25 },
    { Ci: "141414", name: "POTAXIO", age: 55 }];

mostrarClientes = function () {
    let idTablita = document.getElementById("tablitaClientes");

    let contenidoCliente = "<table><tr>"
        + "<th>C.I</th>"
        + "<th>NOMBRE</th>"
        + "<th>EDAD</th>"
        + "</tr>";

    let elementCostumer
    for (c = 0; c < clientes.length; c++) {
        elementCostumer = clientes[c]

        contenidoCliente += "<tr><td>   " + elementCostumer.Ci + "   </td>"
            + " <td> " + elementCostumer.name + " </td>"
            + " <td> " + elementCostumer.age + " </td>"
            + " </tr> ";
    }
    contenidoCliente += "</table>"
    idTablita.innerHTML = contenidoCliente
}

addCostumer = function (cliente) {

    let resultCI = buscarCostumer(cliente.Ci);

    if (resultCI == null) {
        clientes.push(cliente);
        alert("Nuevo cliente " + "'" + cliente.name + "'" + " añadido")
    } else { alert("Ya existe la cédula: " + cliente.Ci) }

    mostrarClientes();
}


buscarCostumer = function (cedula) {
    let foundedCostumer = null

    let costumer
    for (o = 0; o < clientes.length; o++) {
        costumer = clientes[o];

        if (cedula == costumer.Ci) {
            foundedCostumer = costumer
            break
        }
    }
    return foundedCostumer
}

CREATEcostumber = function () {
    let newCI = recuperarTexto("Cci");
    let newName = recuperarTexto("Nonmbre");
    let newAge = recuperarInt("eAge")

    let newCostumer = {};
    newCostumer.Ci = newCI;
    newCostumer.name = newName;
    newCostumer.age = newAge;

    addCostumer(newCostumer)
}


EjecuarBusqueda = function () {
    let cedulaTOSearch = recuperarTexto("CciB");
    let resultadito = buscarCostumer(cedulaTOSearch);

    if (resultadito != null) {
        alert(resultadito.Ci + " " + resultadito.name + " " + resultadito.age)

        mostrarTextoEnCaja("Cci", resultadito.Ci)
        mostrarTextoEnCaja("Nonmbre", resultadito.name)
        mostrarTextoEnCaja("eAge", resultadito.age)
    } else { alert("Cliente no encontrado") }
}

modifyCostumer=function(costumer){
    let ClienteEncontrado = buscarCostumer(costumer.Ci)

    if (ClienteEncontrado != null) {

        ClienteEncontrado.name = costumer.name;
        ClienteEncontrado.age = costumer.age;
    }

}

agregarCambios=function(){
    let newCI = recuperarTexto("Cci");
    let newName = recuperarTexto("Nonmbre");
    let newAge = recuperarInt("eAge")

    let newCostumerModify = {};
    newCostumerModify.Ci = newCI;
    newCostumerModify.name = newName;
    newCostumerModify.age = newAge;

    modifyCostumer(newCostumerModify)
    mostrarClientes()
}