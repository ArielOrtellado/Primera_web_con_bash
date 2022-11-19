function totalapagar(cantTickets,categoria){
    const valorTicket = 200;
    let total = cantTickets * valorTicket;

    switch (categoria){
        case "1":
            total = total - (total * 80 / 100)
            break;
        case "2":
            total = total - (total * 50 / 100)
            break;
        case "3":
            total = total - (total * 15 / 100)
            break;
    }
    return total
}


let boton = document.getElementById("btnResumen")

boton.addEventListener("click", ()=>{
    let cantidad = document.getElementById("cantidadTickets").value
    let categoria = document.getElementById("categoriaSelect").value

    let valor = totalapagar(cantidad,categoria)

    let divMensaje = document.getElementById("totalPago")
    divMensaje.textContent = valor

}

)
