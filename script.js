//Arreglo inicial de usuarios
let usuarios =[];

//Función de Validación
function validarFormulario(nombre, edad, rol, estado) {
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const visorFeedback = document.getElementById("mensaje-feedback");
    
    if (nombre === "" || isNaN(edad) || rol === "" || estado === "") {
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
mostrarUsuario () {
    /** Como arreglo de objetos
     * Usuario debe mostrar:
     * - Nombre
     * - Edad
     * - Rol
     * - Estado
     * llamar a cambiarEstado()?
     * llamar a filtarUsuario()?
     */
};

filtrarUsuario () {
    //Selector: Todos, soloAdmins y soloUsuarios
    function cambiarEstado(id) {
    usuarios.forEach(function(user) {
        if (user.id === id) {
            user.activo = !user.activo; // Alterna entre true y false
        }
    });
    // Si hay un filtro activo, mantiene la vista filtrada
    filtrarUsuarios();
}
};

cambiarEstado () {
    //Alterna estado de activo a inactivo
};

