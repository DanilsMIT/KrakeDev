probarAtributos = function () {
    let person = {
        name: "Omega",
        lastName: "Haro",
        age: 20,
        alive: true
    }

    console.log(person.name)
    console.log(person.age)

    if (person.alive == true) {
        console.log("Esta vivo")
    } else { console.log("Esta derrotado") }
}

crearProducto = function () {
    let product1 = {
        name: "Daga",
        price: 550.80,
        stock: 15
    }
    let product2 = {
        name: "FireBomb",
        price: 200.60,
        stock: 25
    }

    console.log("Nombre del Producto 1: " + product1.name)
    console.log("Precio del Producto 2: " + product2.price)

    if (product1.stock > product2.stock) {
        console.log("El stock de " + product1.name + " es mayor en inventario, contamos con: " + product1.stock)
    } else {
        console.log("El stock de " + product2.name + " es mayor en inventario, contamos con: " + product2.stock)
    }
}

modificarAtributes = function () {
    let cuenta = {
        numero: "3284556",
        saldo: 0.0
    }

    cuenta.saldo = 130;
    cuenta.saldo += 10;
    console.log(cuenta.saldo)
}

createCostumer = function () {
    let cliente = {
        CI: "18045277",
        name: "Salieri"
    }
    cliente.name += "Lara"
    console.log(cliente.name)

    let cliente01 = {};
    cliente01.name = "Ryuji"
    cliente01.lastname = "Escalante"
    cliente01.ci = "8054236"

    console.log(cliente01)
}

incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto;
}

determinarMayor = function (persona1, persona2) {
    if (persona1.age > persona2.age) {
        return persona1
    } else if (persona2.age > persona1.age) {
        return persona2
    } else { return null }

}

probarDeterminarMayor=function(){
    let p1={name:"Carlos",age:45};
    let p2={name:"Mango",age:35};

    let viejillo
    viejillo=determinarMayor(p1,p2)

    if(viejillo!=null){
        console.log("El más mayor es: "+viejillo.name)
    }
}

probarIncrementoSaldo=function(){
    let count1={numero:"356840",saldo:20.64}
    
    incrementarSaldo(count1,5);
    console.log(count1.saldo)
}