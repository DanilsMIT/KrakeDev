let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 },
]

agregarPersona = function () {
    let name = recuperarTexto("boxName");
    let age = recuperarInt("boxAge");

    let nameAprobado;
    let ageAprobado;

    if (name.length < 3) {
        nameAprobado = false
        mostrarTexto("errorname", "El nombre debe tener más de 3 letras")
    } else {
        nameAprobado = true
        mostrarTexto("errorname", "")
    }

    if (age < 0 || age > 100) {
        ageAprobado = false
        mostrarTexto("errorage", "La edad no es valida")
    } else if(isNaN(age)) {
        ageAprobado = false
        mostrarTexto("errorage", "La edad no es valida")
        

    }else{
        ageAprobado = true
        mostrarTexto("errorage", "")
    }

    if (nameAprobado == true && ageAprobado == true) {
        let newPerson = {}

        newPerson.nombre = name
        newPerson.edad = age

        personas.push(newPerson)
        alert("Persona agregada correctamente")
    }

    mostrarRegistroPersonas()
}

mostrarRegistroPersonas=function(){
    let TablitaEmpleadosID = document.getElementById("registroTablita")
    let TablitaEmpleados = "<table><tr>"
        + "<th>EDAD</th>"
        + "<th>Nombre</th>"
        + "</tr>"

    let Employee
    for (e = 0; e < personas.length; e++) {
        Employee = personas[e]

        TablitaEmpleados += "<tr>"
        TablitaEmpleados += "<td>" + Employee.edad + "</td>"
        TablitaEmpleados += "<td>" + Employee.nombre + "</td>"
        TablitaEmpleados += "</tr>"
    }

    TablitaEmpleados += "</table>"
    TablitaEmpleadosID.innerHTML = TablitaEmpleados
}

encontrarMayor=function(){
    let personaMayor=personas[0]
    let elementoPersona;

    for(p=1;p<personas.length;p++){
        elementoPersona=personas[p];
        console.log(elementoPersona)

        if(elementoPersona.edad>personaMayor.edad){
            personaMayor=elementoPersona
        }
    }

    return personaMayor
}


encontrarMenor=function(){
    let personaMenor=personas[0]
    let elementoPersona;

    for(p=1;p<personas.length;p++){
        elementoPersona=personas[p];
        console.log(elementoPersona)

        if(elementoPersona.edad<personaMenor.edad){
            personaMenor=elementoPersona
        }
    }

    return personaMenor
}

determinarMayor=function(){
    let mayor=encontrarMayor()
    mostrarTexto("tagM","La persona más adulta es: ")
    mostrarTexto("nameM", mayor.nombre)
    mostrarTexto("tagMe",",edad: ")
    mostrarTexto("ageM", mayor.edad)
}

determinarMenor=function(){
    let menor=encontrarMenor()
    mostrarTexto("tagm","La persona más joven es: ")
    mostrarTexto("namem", menor.nombre)
    mostrarTexto("tagme",",edad: ")
    mostrarTexto("agem", menor.edad)
}