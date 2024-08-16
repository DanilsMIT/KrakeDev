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