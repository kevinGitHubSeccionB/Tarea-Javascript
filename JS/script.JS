window.onload=function(){
    alert("BIENVENIDO A LA LISTA DE COMPRAS ONLINE");
}


const input = document.getElementById("compraInput");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("listaCompras");
const botonModo = document.getElementById("modoBtn");


botonAgregar.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto === "") {
        alert("Por favor escribe un producto.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;

    
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "✖";
    btnEliminar.classList.add("eliminar");

    
    li.addEventListener("click", () => {
        li.classList.toggle("completada");
    });

    
    btnEliminar.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);
    input.value = "";
});


botonModo.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botonModo.textContent = "Modo Claro";
    } else {
        botonModo.textContent = "Modo Oscuro";
    }
});
