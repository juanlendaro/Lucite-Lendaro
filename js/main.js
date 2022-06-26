// class Amigurumi {
//     constructor(id, nombre, precio) {
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// class Pedido {
//     constructor(amigurumi, cantidad) {
//         this.amigurumis = amigurumi;
//         this.cantidad = cantidad;
//     }
// }

// const amigurumi1 = new Amigurumi("1", "Oso", 400);
// const amigurumi2 = new Amigurumi("2", "Dinosaurio", 600);
// const amigurumi3 = new Amigurumi("3", "Conejo", 200);
// const amigurumi4 = new Amigurumi("4", "Koala", 150);

// const amigurumis = [amigurumi1, amigurumi2, amigurumi3, amigurumi4]
// const carrito = []

// function agregarAmigurumiAlCarrito(id) {
//     const amigurumiEncontrado = amigurumis.find(amigurumi => amigurumi.id == id);
//     if (amigurumiEncontrado == undefined) {
//         alert("No tenemos este amigurumi por el momento");
//     } else {
//         const cantidad = prompt("Ingresá cuantas unidades de " + amigurumiEncontrado.nombre)
//         const nuevoPedido = new Pedido(amigurumiEncontrado, cantidad)
//         carrito.push(nuevoPedido);
//     }
// }

// function mostrarCarritoActual() {
//     alert("Compraste " + nuevoPedido);
// }

// function mostrarAmigurumis() {
//     let mostrarMenu = "¿Que amigurumi querés?\n";
//     amigurumis.forEach(amigurumi => {
//         mostrarMenu += amigurumi.id + ") " + amigurumi.nombre + " - " + amigurumi.precio + "\n";
//     })
//     let respuesta = prompt(mostrarMenu);
//     return respuesta;
// }


// function confirmarCompra() {
//     const respuesta = prompt("¿Querés comprar un amigurumi? Escribí el número correspondiente\n1) Si \n2) No");
//     if (respuesta == "1") {
//         return true;
//     } else {
//         return false;
//     }
// }

// function comprarAmigurumi() {
//     while (confirmarCompra()) {
//         let amigurumiElegido = mostrarAmigurumis();
//         agregarAmigurumiAlCarrito(amigurumiElegido);
//         mostrarCarritoActual();
//     }
//     if (respuesta = 2) {
//         gracias();
//     }

//     function gracias() {
//         alert("Gracias por visitar Lucite");
//     }
// }

// comprarAmigurumi();

function mostrarStock1(stock1) {

    const columna1 = document.getElementById("columna1");
    columna1.innerHTML = "";
    stock1.forEach(amigurumi => {
        const divCard = document.createElement("div");
        divCard.className = "card text-center";
        divCard.innerHTML = `
            <img src="${amigurumi.img}" class="card-img-top" alt="${amigurumi.nombre}">
              <div class="card-body">
                <h5 class="card-title text-center">"${amigurumi.nombre}"</h5>
                <p class="card-text">${amigurumi.desc}</p>
                <p>Precio: $${amigurumi.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
             `;
        columna1.appendChild(divCard);
    })
}

function mostrarStock2(stock2) {

    const columna2 = document.getElementById("columna2");
    columna2.innerHTML = "";
    stock2.forEach(amigurumi => {
        const divCard = document.createElement("div");
        divCard.className = "card text-center";
        divCard.innerHTML = `
            <img src="${amigurumi.img}" class="card-img-top" alt="${amigurumi.nombre}">
              <div class="card-body">
                <h5 class="card-title text-center">"${amigurumi.nombre}"</h5>
                <p class="card-text">${amigurumi.desc}</p>
                <p>Precio: $${amigurumi.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
             `;
        columna2.appendChild(divCard);
    })
}


mostrarStock1(stock1)
mostrarStock2(stock2)