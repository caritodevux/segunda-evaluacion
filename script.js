//Arreglo inicial de usuarios
let usuarios =[];

//Función de Validación
function validarFormulario(nombre, edad) {
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const visorFeedback = document.getElementById("mensaje-feedback");
    
    if (nombre === "" || isNaN(edad)) {
        visorFeedback.textContent = "Error: Todos los campos son obligatorios.";
        visorFeedback.style.color = "red";
        return false;
    }
    if (edad <= 0) {
        visorFeedback.textContent = "Error: La edad debe ser mayor a 0.";
        visorFeedback.style.color = "red";
        return false;
    }
    if (!soloLetras.test(nombre)) {
        visorFeedback.textContent = "Error: El nombre solo debe tener letras.";
        visorFeedback.style.color = "red";
        return false;
    }
    //Todo es valido
    console.log("Usuario validado correctamente");
    return true;
}

//Función para Agregar Usuario
function agregarUsuario() {
    const nombre = document.getElementById("input-nombre").value.trim();
    const edad = parseInt(document.getElementById("input-edad").value);
    const rol = document.getElementById("select-rol").value;

    if (validarFormulario(nombre, edad)) {
        const nuevoUsuario = {
            id: Date.now(), //para llevar un registro del momento del registro
            nombre: nombre,
            edad: edad,
            rol: rol,
            activo: true // Por defecto es Activo
        };

        usuarios.push(nuevoUsuario);

        // Limpieza del formulario
        document.getElementById("input-nombre").value = "";
        document.getElementById("input-edad").value = "";

        mostrarUsuarios();
    }
}

//funcion de renderizar la lista de usuarios
function mostrarUsuarios(listaRenderizar = usuarios) {
    const tablaUI = document.getElementById("tabla-usuarios");
    tablaUI.innerHTML = ""; // Limpiar tabla

    let activos = 0;
    let inactivos = 0;

    listaRenderizar.forEach(function(user) {
        // Conteo para estadísticas (Punto adicional)
        if (user.activo) activos++; else inactivos++;

        const tr = document.createElement("tr");

        // Creamos las celdas usando innerHTML para simplificar la creación de la fila
        tr.innerHTML = `
            <td>${user.nombre}</td>
            <td>${user.edad}</td>
            <td>${user.rol}</td>
            <td>
                <span class="badge ${user.activo ? 'bg-success' : 'bg-secondary'}">
                    ${user.activo ? 'Activo' : 'Inactivo'}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-warning me-1" onclick="cambiarEstado(${user.id})">Cambiar Estado</button>
                <button class="btn btn-sm btn-danger" onclick="eliminarUsuario(${user.id})">Eliminar</button>
            </td>
        `;

        tablaUI.appendChild(tr);
    });

    // Actualizar contadores
    document.getElementById("contador-activos").textContent = activos;
    document.getElementById("contador-inactivos").textContent = inactivos;
}

filtrarUsuario () {
    //Selector: Todos, soloAdmins y soloUsuarios
};

function cambiarEstado(id) {
    usuarios.forEach(function(user) {
        if (user.id === id) {
            user.activo = !user.activo; // Alterna entre true y false
        }
    });
    // Si hay un filtro activo, mantiene la vista filtrada
    filtrarUsuarios();
}

function eliminarUsuario(id) {
    //Usar filter para eliminar registro de mascota según id.
    usuarios = usuarios.filter(function(user){
        return user.id !==id;
    })
    //Llamar a renderizarLista() para actualizar
    const visorFeedback = document.getElementById("mensaje-feedback");
    visorFeedback.textContent = "Se ha eliminado" + id;
    visorFeedback.style.color = "blue";
    console.log("Se elimino " + id);
    mostrarUsuario(); //revisar
};

//Al apretar el boton corre la validacion y registro
document.getElementById("btn-agregar").addEventListener("click", agregarUsuario);