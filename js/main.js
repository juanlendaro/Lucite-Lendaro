
function agregarAlCarrito(id) {
    let productoAgregar = stock1.find(item => item.id === id) || stock2.find(item => item.id === id);
    console.log(productoAgregar);
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
        })
    })
}


mostrarStock1(stock1)
mostrarStock2(stock2)