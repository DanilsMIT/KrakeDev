let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1807542324", nombre: "Ramiro", apellido: "Haro", sueldo: 1100.0 }
]

mostrarOptionEmpleado = function () {
    mostrarComponente("divEmpleado")
    ocultarComponente("divRol")
    ocultarComponente("divResumen")

    showEmployees()
}
mostrarOptionRol = function () {
    ocultarComponente("divEmpleado")
    mostrarComponente("divRol")
    ocultarComponente("divResumen")
}
mostrarOptionResumen = function () {
    ocultarComponente("divEmpleado")
    ocultarComponente("divRol")
    mostrarComponente("divResumen")
}

showEmployees = function () {
    let TablitaEmpleadosID = document.getElementById("tablaEmpleados")
    let TablitaEmpleados = "<table><tr>"
        + "<th>Cédula</th>"
        + "<th>Nombre</th>"
        + "<th>Apellido</th>"
        + "<th>Sueldo</th>"
        + "</tr>"

    let Employee
    for (e = 0; e < empleados.length; e++) {
        Employee = empleados[e]

        TablitaEmpleados += "<tr>"
        TablitaEmpleados += "<td>" + Employee.cedula + "</td>"
        TablitaEmpleados += "<td>" + Employee.nombre + "</td>"
        TablitaEmpleados += "<td>" + Employee.apellido + "</td>"
        TablitaEmpleados += "<td>" + Employee.sueldo + "</td>"
        TablitaEmpleados += "</tr>"
    }

    TablitaEmpleados += "</table>"
    TablitaEmpleadosID.innerHTML = TablitaEmpleados
}