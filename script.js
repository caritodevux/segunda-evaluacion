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

// Reemplazo visual para estilo CRM corporativo
        tr.innerHTML = `
            <td class="ps-4 fw-bold text-dark">${user.nombre}</td>
            <td>${user.edad} años</td>
            <td>
                <span class="badge border border-secondary text-secondary bg-light">
                    ${user.rol.toUpperCase()}
                </span>
            </td>
            <td>
                <span class="badge ${user.activo ? 'bg-success' : 'bg-danger'}">
                    ${user.activo ? 'Activo' : 'Inactivo'}
                </span>
            </td>
            <td class="text-end pe-4">
                <div class="btn-group" role="group">
                    <button class="btn btn-sm btn-outline-secondary" onclick="cambiarEstado(${user.id})">
                        Alternar
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="eliminarUsuario(${user.id})">
                        Borrar
                    </button>
                </div>
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