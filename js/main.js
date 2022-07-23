let carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras")) ?? []

const contenedorCarrito = document.getElementById("carrito-contenedor");

const botonTerminar = document.getElementById("terminar");
const finCompra = document.getElementById("fin-compra");

const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");

function agregarAlCarrito(id) {
    let productoAgregar = stock1.find(item => item.id === id) || stock2.find(item => item.id === id);
    carritoDeCompras.push(productoAgregar);
    mostrarCarrito(productoAgregar);
    actualizarCarrito();
    guardarCarrito();
}

function guardarCarrito() {
    if (carritoDeCompras.length > 0)
        localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
}

function recuperarCarrito() {
    if (carrito = JSON.parse(localStorage.getItem("carritoDeCompras")))
        carrito.forEach(amigurumi => {
            carritoDeCompras.push(amigurumi)
        })
}

actualizarCarrito();

function mostrarCarrito(productoAgregar) {
    let div = document.createElement("div");
    div.className = "productoEnCarrito"
    div.innerHTML = `<p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <button id="eliminar${productoAgregar.id}" class= "boton-eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                  </svg></button>
                    `;
    contenedorCarrito.appendChild(div);

    const btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`);
    btnEliminar.addEventListener("click", () => {
        btnEliminar.parentElement.remove();
        carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id !== productoAgregar.id);
        actualizarCarrito();
        guardarCarrito();
    })

}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length;
    precioTotal.innerHTML = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0);
}

const toast = () => {
    Toastify({

        text: "Amigurumi agregado al carrito :)",

        style: {
            background: "linear-gradient(to right, #EE8383, #fb7676)",
        },

        duration: 3000


    }).showToast();

}

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
                <a id= "boton ${amigurumi.id}" class="btn btn-primary">Comprar</a>
              </div>
             `;
        columna1.appendChild(divCard);

        const btnAgregar = document.getElementById(`boton ${amigurumi.id}`);

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(amigurumi.id);
            toast();

        })
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
                <a id= "boton ${amigurumi.id}" class="btn btn-primary">Comprar</a>
              </div>
             `;
        columna2.appendChild(divCard);

        const btnAgregar = document.getElementById(`boton ${amigurumi.id}`);

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(amigurumi.id);
            toast();
        })
    })
}



mostrarStock1(stock1)
mostrarStock2(stock2)

const URL = "../js/amigurumis.json"

fetch(URL)
    .then(res => res.json())
    .then(data => { console.log(data) })
    .catch(console.log("No se encontró el stock, por favor intenta más tarde"))