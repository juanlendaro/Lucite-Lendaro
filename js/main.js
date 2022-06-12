debugger
let total = 0
function suma(numero1, numero2) {
    return numero1 + numero2;
}

function calculardescuento(num1) {
    return num1 * 0.5;
}

let comprar = prompt("¿Querés comprar amigurumis?");
while (comprar != "no") {

    let producto = prompt("¿Que amigurumi querés comprar?\n -oso ($400) \n -dinosaurio ($600) \n -conejo ($200) \n -koala ($150)")

    switch (producto) {
        case 'oso': total = suma(total, 400);
            alert("Tu compra es de " + total)
            comprar = prompt("¿Querés seguir comprando amigurumis?");
            break;

        case 'dinosaurio': let descuento1 = prompt("Si comprás 2 hay un descuento del 50% en la segunda unidad. ¿Te interesa?")

            if (descuento1 == "si") {
                total = 600 + calculardescuento(600)
                alert("Tu compra es de " + total)
                comprar = prompt("¿Querés seguir comprando amigurumis?");
                break;
            }
            else {
                total = suma(total, 600);
                alert("Tu compra es de " + total)
                comprar = prompt("¿Querés seguir comprando amigurumis?");
                break;
            }

        case 'conejo': total = suma(total, 200);
            alert("Tu compra es de " + total)
            comprar = prompt("¿Querés seguir comprando amigurumis?");
            break;

        case 'koala': total = suma(total, 150);
            alert("Tu compra es de " + total)
            comprar = prompt("¿Querés seguir comprando amigurumis?");
            break;
    }
}

alert("Gracias por visitar Lucite");