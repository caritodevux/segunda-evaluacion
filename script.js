// Arreglo inicial de usuarios
let usuarios = [];

// Función de Validación
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
    return true;
}

// Función para Agregar Usuario
function agregarUsuario() {
    // CORREGIDO: Usando los IDs exactos del HTML
    const nombre = document.getElementById("nombre").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const rol = document.getElementById("rol").value;

    if (validarFormulario(nombre, edad)) {
        const nuevoUsuario = {
            id: Date.now(), 
            nombre: nombre,
            edad: edad,
            rol: rol,
            activo: true 
        };

        usuarios.push(nuevoUsuario);

        // CORREGIDO: Limpieza usando los IDs correctos
        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("mensaje-feedback").textContent = "Usuario agregado exitosamente.";
        document.getElementById("mensaje-feedback").style.color = "green";

        mostrarUsuarios();
    }
}

// Función de renderizar la lista de usuarios
function mostrarUsuarios(listaRenderizar = usuarios) {
    const tablaUI = document.getElementById("tabla-usuarios");
    tablaUI.innerHTML = ""; 

    let activos = 0;
    let inactivos = 0;

    listaRenderizar.forEach(function(user) {
        if (user.activo) activos++; else inactivos++;

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${user.nombre}</td>
            <td>${user.edad}</td>
            <td>${user.rol}</td>
            <td>${user.activo ? 'Activo' : 'Inactivo'}</td>
            <td>
                <button onclick="cambiarEstado(${user.id})">Cambiar Estado</button>
                <button onclick="eliminarUsuario(${user.id})">Eliminar</button>
            </td>
        `;

        tablaUI.appendChild(tr);
    });

    // CORREGIDO: Ahora estos IDs sí existen en el HTML
    document.getElementById("contador-activos").textContent = activos;
    document.getElementById("contador-inactivos").textContent = inactivos;
}

function filtrarUsuarios() {
    // 1. Capturamos el valor de AMBOS filtros
    const valorRol = document.getElementById("filtro-rol").value;
    const valorEdad = document.getElementById("filtro-edad").value;

    // Empezamos asumiendo que mostraremos la lista completa
    let listaFiltrada = usuarios;

    // 2. Primer Colador: Filtro por Rol
    if (valorRol !== "todos") {
        listaFiltrada = listaFiltrada.filter(function(user) {
            return user.rol === valorRol;
        });
    }

    // 3. Segundo Colador: Filtro por Edad (se aplica a los que pasaron el primer colador)
    if (valorEdad !== "todas") {
        listaFiltrada = listaFiltrada.filter(function(user) {
            if (valorEdad === "menores-18") {
                return user.edad < 18;
            } else if (valorEdad === "18-35") {
                return user.edad >= 18 && user.edad <= 35;
            } else if (valorEdad === "mayores-35") {
                return user.edad > 35;
            }
        });
    }
    
    // 4. Renderizamos la lista que sobrevivió a ambos filtros
    mostrarUsuarios(listaFiltrada);
}

function cambiarEstado(id) {
    usuarios.forEach(function(user) {
        if (user.id === id) {
            user.activo = !user.activo; 
        }
    });
    filtrarUsuarios();
}

function eliminarUsuario(id) {
    usuarios = usuarios.filter(function(user){
        return user.id !== id;
    });
    
    const visorFeedback = document.getElementById("mensaje-feedback");
    visorFeedback.textContent = "Se ha eliminado el usuario ID: " + id;
    visorFeedback.style.color = "blue";
    
    filtrarUsuarios(); 
}

// Listeners de Eventos
window.onload = function() {
    document.getElementById("btn-agregar").addEventListener("click", agregarUsuario);
    document.getElementById("filtro-rol").addEventListener("change", filtrarUsuarios);
    document.getElementById("filtro-edad").addEventListener("change", filtrarUsuarios);
};