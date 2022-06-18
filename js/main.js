// debugger
// let total = 0
// function suma(numero1, numero2) {
//     return numero1 + numero2;
// }

// function calculardescuento(num1) {
//     return num1 * 0.5;
// }

// let comprar = prompt("¿Querés comprar amigurumis?");
// while (comprar != "no") {

//     let producto = prompt("¿Que amigurumi querés comprar?\n -oso ($400) \n -dinosaurio ($600) \n -conejo ($200) \n -koala ($150)")

//     switch (producto) {
//         case 'oso': total = suma(total, 400);
//             alert("Tu compra es de " + total)
//             comprar = prompt("¿Querés seguir comprando amigurumis?");
//             break;

//         case 'dinosaurio': let descuento1 = prompt("Si comprás 2 hay un descuento del 50% en la segunda unidad. ¿Te interesa?")

//             if (descuento1 == "si") {
//                 total = 600 + calculardescuento(600)
//                 alert("Tu compra es de " + total)
//                 comprar = prompt("¿Querés seguir comprando amigurumis?");
//                 break;
//             }
//             else {
//                 total = suma(total, 600);
//                 alert("Tu compra es de " + total)
//                 comprar = prompt("¿Querés seguir comprando amigurumis?");
//                 break;
//             }

//         case 'conejo': total = suma(total, 200);
//             alert("Tu compra es de " + total)
//             comprar = prompt("¿Querés seguir comprando amigurumis?");
//             break;

//         case 'koala': total = suma(total, 150);
//             alert("Tu compra es de " + total)
//             comprar = prompt("¿Querés seguir comprando amigurumis?");
//             break;
//     }
// }

// alert("Gracias por visitar Lucite");

class Amigurumi {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Pedido {
    constructor(amigurumi, cantidad) {
        this.amigurumis = amigurumi;
        this.cantidad = cantidad;
    }
}

const amigurumi1 = new Amigurumi("1", "Oso", 400);
const amigurumi2 = new Amigurumi("2", "Dinosaurio", 600);
const amigurumi3 = new Amigurumi("3", "Conejo", 200);
const amigurumi4 = new Amigurumi("4", "Koala", 150);

const amigurumis = [amigurumi1, amigurumi2, amigurumi3, amigurumi4]
const carrito = []

function agregarAmigurumiAlCarrito(id) {
    const amigurumiEncontrado = amigurumis.find(amigurumi => amigurumi.id == id);
    if (amigurumiEncontrado == undefined) {
        alert("No tenemos este amigurumi por el momento");
    } else {
        const cantidad = prompt("Ingresá cuantas unidades de " + amigurumiEncontrado.nombre)
        const nuevoPedido = new Pedido(amigurumiEncontrado, cantidad)
        carrito.push(nuevoPedido);
    }
}

function mostrarCarritoActual() {
    alert("Compraste " + nuevoPedido);
}

function mostrarAmigurumis() {
    let mostrarMenu = "¿Que amigurumi querés?\n";
    amigurumis.forEach(amigurumi => {
        mostrarMenu += amigurumi.id + ") " + amigurumi.nombre + " - " + amigurumi.precio + "\n";
    })
    let respuesta = prompt(mostrarMenu);
    return respuesta;
}


function confirmarCompra() {
    const respuesta = prompt("¿Querés comprar un amigurumi? Escribí el número correspondiente\n1) Si \n2) No");
    if (respuesta == "1") {
        return true;
    } else {
        return false;
    }
}

function comprarAmigurumi() {
    while (confirmarCompra()) {
        let amigurumiElegido = mostrarAmigurumis();
        agregarAmigurumiAlCarrito(amigurumiElegido);
        mostrarCarritoActual();
    }
    if (respuesta = 2) {
        gracias();
    }

    function gracias() {
        alert("Gracias por visitar Lucite");
    }
}

comprarAmigurumi();