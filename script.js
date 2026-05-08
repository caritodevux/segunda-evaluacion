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
mostrarUsuario () {
    //Buscar el <ul> por ID y Limpiar con innerHTML
    const listaUI = document.getElementById("lista-usuarios");
    listaUI.innerHTML = "";
    //funcion para cada usuario, recorrer el arreglo
    pacientes.forEach(function(usuarios) {
        //Crear <li> 
        const li = document.createElement("li");
        // Formateo del texto informativo
        li.textContent = usuarios.nombre + ", " + usuarios.edad + " años" + ", " + usuarios,rol + ", " + usuarios,estado ;
        
        //Crear el botón "Eliminar"
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        //CLick del boton eliminar
        btnEliminar.onclick = function() { 
            eliminarUsuario(usuario.id);
        };
        
        const btnEstado = document.createElement("button");
        //CLick del boton estado
        btnEstado.onclick = function() { 
            eliminarUsuario(usuario.id);
        };
        //Hacer el appendChild para elementos de la lista y botones
        li.appendChild(btnEstado);
        li.appendChild(btnEliminar);
        listaUI.appendChild(li);
    });    
};

filtrarUsuario () {
    //Selector: Todos, soloAdmins y soloUsuarios
};

cambiarEstado () {
    //Alterna estado de activo a inactivo
};

eliminarUsuario(id) {
    //Usar filter para eliminar registro de mascota según id.
    usuarios = usuarios.filter(function(t){
        return t.id !==id;
    })
    //Llamar a renderizarLista() para actualizar
    const visorFeedback = document.getElementById("mensaje-feedback");
    visorFeedback.textContent = "Se ha eliminado" + id;
    visorFeedback.style.color = "blue";
    console.log("Se elimino " + id);
    mostrarUsuario();
};

//Al apretar el boton corre la validacion y registro
document.getElementById("btn-agregar").addEventListener("click", registrarUsuario);