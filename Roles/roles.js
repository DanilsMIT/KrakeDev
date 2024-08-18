let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1807542324", nombre: "Ramiro", apellido: "Haro", sueldo: 1100.0 }
]
let esNew = false

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

    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarNuevo = function () {
    esNew = true
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

buscarEmpleado = function (cedulita) {


    let employEncontrado = null
    for (e = 0; e < empleados.length; e++) {
        let employBuscando = empleados[e];

        if (employBuscando.cedula == cedulita) {
            employEncontrado = employBuscando
        }
    }
    return employEncontrado
}

AddNewEmpleado = function (nuevoempleado) {
    let EmpleadoAgregado

    let EmpleadoEnListado = buscarEmpleado(nuevoempleado.cedula)
    if (EmpleadoEnListado == null) {
        empleados.push(nuevoempleado);;
        EmpleadoAgregado = true
    } else {
        EmpleadoAgregado = false
        alert("La cédula ya corresponde a un empleado registrado: " + EmpleadoEnListado.nombre + " " + EmpleadoEnListado.apellido)
        BloquearComponentes();
    }

    return EmpleadoAgregado
}

GuardarEnListaNuevoEmpleado = function () {
    let ci = recuperarTexto("txtCedula")
    let name = recuperarTexto("txtNombre")
    let lastname = recuperarTexto("txtApellido")
    let salary = recuperarFloat("txtSueldo")

    let NameAprobado;
    if (name.length >= 3) {
        let MayusCn
        for (n = 0; n < name.length; n++) {
            MayusCn = name.charCodeAt(n)

            if (MayusCn >= 65 && MayusCn <= 90) {
                NameAprobado = true
                mostrarTexto("lblErrorNombre", "")

            } else {
                mostrarTexto("lblErrorNombre", "EL NOMBRE DEBE IR COMPLETO EN MAYÚSCULAS")
                NameAprobado = false
                break
            }
        }
    } else { mostrarTexto("lblErrorNombre", "EL NOMBRE DEBE TENER ALMENOS 3 CARACTERES") }

    let LastnameAprobado;

    if (lastname.length >= 3) {

        let MayusCa
        for (n = 0; n < lastname.length; n++) {
            MayusCa = lastname.charCodeAt(n)

            if (MayusCa >= 65 && MayusCa <= 90) {
                mostrarTexto("lblErrorApellido", "")
                LastnameAprobado = true

            } else {
                mostrarTexto("lblErrorApellido", "EL APELLIDO DEBE IR COMPLETO EN MAYÚSCULAS")
                LastnameAprobado = false
                break
            }
        }
    } else { mostrarTexto("lblErrorApellido", "EL APELLIDO DEBE TENER ALMENOS 3 CARACTERES") }

    let SalaryAprobado;
    if (salary < 400.0 || salary > 5000.0) {
        mostrarTexto("lblErrorSueldo", "EL SALARIO NO CORRESPONDE A UN MONTO COHERENTE")
        SalaryAprobado = false
    } else if (isNaN(salary)) {
        mostrarTexto("lblErrorSueldo", "EL SALARIO SOLO DEBE ESTAR DIGITADO EN NÚMEROS")
        SalaryAprobado = false
    } else {
        SalaryAprobado = true
        mostrarTexto("lblErrorSueldo", "")
    }

    let ciAprobado;
    if (ci.length > 10 || ci.length < 10) {
        mostrarTexto("lblErrorCedula", "LA CÉDULA SE COMPONE DE 10 DIGITOS")
        ciAprobado = false
    } else {
        ciAprobado = true
        mostrarTexto("lblErrorCedula", "")
    }


    let newEmployee
    if (ciAprobado == true && NameAprobado == true && LastnameAprobado == true && SalaryAprobado == true && esNew == true) {
        let NuevoBro = {}

        NuevoBro.cedula = ci;
        NuevoBro.nombre = name;
        NuevoBro.apellido = lastname;
        NuevoBro.sueldo = salary;
        newEmployee = AddNewEmpleado(NuevoBro);

        if (newEmployee == true) {
            alert("Empleado: " + NuevoBro.nombre + " " + NuevoBro.apellido + " agregado")
            showEmployees();
            BloquearComponentes();
            habilitarComponente("btnNuevo");
            esNew = true

        }
    } else {
        habilitarComponente("btnGuardar");
    }
    //////Modificar empleado
    if (esNew == false && NameAprobado == true && LastnameAprobado == true && SalaryAprobado == true) {
        let ModifyEmployee = buscarEmpleado(ci)
        ModifyEmployee.nombre = name;
        ModifyEmployee.apellido = lastname;
        ModifyEmployee.sueldo = salary;

        alert("Empleado: " + ModifyEmployee.nombre + " " + ModifyEmployee.apellido + " modificado")
        showEmployees();
        BloquearComponentes()
        habilitarComponente("btnNuevo");
    }

}

BloquearComponentes = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarSearch = function () {
    esNew = false
    let CiToSearch = recuperarTexto("txtBusquedaCedula")
    let EmployeeFounded = buscarEmpleado(CiToSearch)

    if (EmployeeFounded == null) {
        mostrarTexto("lblErrorBusqueda", "Empleado no registrado")
        alert("el empleado no existe")
    } else {
        mostrarTextoEnCaja("txtCedula", EmployeeFounded.cedula)
        mostrarTextoEnCaja("txtNombre", EmployeeFounded.nombre)
        mostrarTextoEnCaja("txtApellido", EmployeeFounded.apellido)
        mostrarTextoEnCaja("txtSueldo", EmployeeFounded.sueldo)

        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");

        deshabilitarComponente("txtCedula")
        deshabilitarComponente("btnNuevo")
    }
}

CLEAN=function(){
    mostrarTextoEnCaja("txtCedula","")
    mostrarTextoEnCaja("txtNombre","")
    mostrarTextoEnCaja("txtApellido","")
    mostrarTextoEnCaja("txtSueldo","")

    BloquearComponentes();
    esNew=false
}

BuscarPorROl=function(){
    let buscarbyCI=recuperarTexto("txtBusquedaCedulaRol")
    let EmpleadoFounded=buscarEmpleado(buscarbyCI)

    if(EmpleadoFounded!=null){
        mostrarTexto("infoCedula",EmpleadoFounded.cedula)
        mostrarTexto("infoNombre",EmpleadoFounded.nombre+" "+EmpleadoFounded.apellido)
        mostrarTexto("infoSueldo",EmpleadoFounded.sueldo)
    }else{ alert("No hay registro de este empleado")}
}

calcularAporteEmpleado=function(salary){
    let aporte=salary*0.0945

    return aporte
}

calcularTotalAPagar=function(salary,IESS,Disccount){
    let Totallity=salary-IESS-Disccount

    return Totallity
}

calcularRol=function(){
    let salaryEmployee= recuperarIntDIV("infoSueldo")
    let AporteEmployee=calcularAporteEmpleado(salaryEmployee)

    let disccountEmployee=recuperarFloat("txtDescuentos")
    let DisccountAprobado;
    if (disccountEmployee < 0|| disccountEmployee > salaryEmployee) {
        mostrarTexto("lblErrorDescuentos", "EL DESCUENTO NO CORRESPONDE A UN MONTO COHERENTE")
        DisccountAprobado = false
    } else if (isNaN(disccountEmployee)) {
        mostrarTexto("lblErrorDescuentos", "EL DESCUENTO SOLO DEBE ESTAR DIGITADO EN NÚMEROS")
        DisccountAprobado = false
    } else {
        DisccountAprobado = true
        mostrarTexto("lblErrorDescuentos", "")
    }

    
    if(DisccountAprobado==true){
    mostrarTexto("infoIESS",AporteEmployee)
    let PAGO=calcularTotalAPagar(salaryEmployee,AporteEmployee,disccountEmployee)
    let pagofixed=PAGO.toFixed(2)
    mostrarTexto("infoPago",pagofixed)
    
    }

}