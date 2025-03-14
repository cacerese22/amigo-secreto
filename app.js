// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let nombresAmigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    const inputNombre = document.querySelector("#amigo");
    const listaAmigos = document.querySelector("#listaAmigos");
    const nombre = inputNombre.value.trim(); // Captura el nombre y elimina espacios en blanco

    // Validar entrada vacía
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que solo contenga letras y espacios
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular para letras y espacios
    if (!regex.test(nombre)) {
        alert("Por favor, ingrese solo letras y espacios.");
        inputNombre.value = ""; // Limpiar el campo de entrada
        return;
    }

    // Actualizar el array
    nombresAmigos.push(nombre);

    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

function actualizarListaAmigos() {
    const listaAmigos = document.querySelector("#listaAmigos"); // Obtener el elemento <ul>
    listaAmigos.innerHTML = ""; // Limpiar la lista

    // Recorrer el array y agregar cada amigo como <li>
    for (let amigo of nombresAmigos) {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo; // Asignar el nombre al texto del <li>
        listaAmigos.appendChild(nuevoAmigo); // Agregar el <li> al <ul>
    }
}



function sortearAmigo() {
    // Validar que el array no esté vacío
    if (nombresAmigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, añada al menos un nombre antes de realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = nombresAmigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElemento = document.querySelector("#resultado");
    resultadoElemento.innerHTML = `<li>${amigoSorteado}</li>`;
}
