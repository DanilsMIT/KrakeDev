let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]

mostrarOptionEmpleado=function(){
    mostrarComponente("divEmpleado")
    ocultarComponente("divRol")
    ocultarComponente("divResumen")
}
mostrarOptionRol=function(){
    ocultarComponente("divEmpleado")
    mostrarComponente("divRol")
    ocultarComponente("divResumen")
}
mostrarOptionResumen=function(){
    ocultarComponente("divEmpleado")
    ocultarComponente("divRol")
    mostrarComponente("divResumen")
}
