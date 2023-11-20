const entradaTarea = document.getElementById("tarea");
const botonTarea = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");
const listaHechas = document.getElementById("listaTareasHechas");

function agregarElemento() {
    const textoTarea = entradaTarea.value;

    if (textoTarea.trim() !== ""){
        const nuevaTarea = document.createElement("li");
        const botonBorrar = document.createElement("button");

        nuevaTarea.textContent = textoTarea;
        botonBorrar.textContent = "Hecha";
        nuevaTarea.appendChild(botonBorrar);
        listaTareas.appendChild(nuevaTarea);
        entradaTarea.value = "";
        entradaTarea.focus(); /* Para que el cursor se quede en el input */

    }
}
function borrarElemento(event) {
    const elemento = event.target;
    const padre = elemento.parentNode;

    const botonBorrar = padre.querySelector("button");
    botonBorrar.remove();

    const tareaHecha = padre.cloneNode(true);

    padre.appendChild(botonBorrar);

    padre.remove();

    listaHechas.appendChild(tareaHecha);
}

botonTarea.addEventListener("click", agregarElemento);
listaTareas.addEventListener("click", borrarElemento);