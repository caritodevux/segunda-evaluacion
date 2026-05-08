//Arreglo inicial de usuarios
let usuarios =[];

//funcion de registrar usuarios
agregarUsuario () {
    //Captura de datos
    const nombre = document.getElementById("nombre").value.trim(); 
    const edad = parseInt(document.getElementById("edad").value);
    const especie = document.getElementById("rol").value;
    const especie = document.getElementById("estado").value;
    //Parrafo para el mensaje
    const visorFeedback = document.getElementById("mensaje-feedback");

    // Validacion no usar caracteres raros, pedir ayuda a ia para completar
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    //Validación casos
    if (nombre === "" || isNaN(edad)) {
        visorFeedback.textContent = "Error: Todos los campos son obligatorios.";
        visorFeedback.style.color = "red";
        console.log("Usuario dejo vacio alguno de los campos");
    } else if (!soloLetras.test(nombre)) {
        visorFeedback.textContent = "Error: El nombre solo debe tener letras.";
        visorFeedback.style.color = "red";
        console.log("Usuario uso caracteres distintos a letras");
    } else if (edad <= 0) {
        visorFeedback.textContent = "Edad minima es de 1 año";
        visorFeedback.style.color = "red";
        console.log("Edad usuario menor a cero");
    } else {
        visorFeedback.textContent = "¡Registro exitoso para  el usuario" + nombre ;
        visorFeedback.style.color = "green";
        console.log("Datos validados con exito");

        //Guardar a los usuarios como objetos
        const nuevoUsuario = {
            nombre: nombre,
            edad: edad,
            rol: rol,
            activo: true,
        };
        //Agregando paciente al arreglo global
        usuarios.push(nuevoUsuario);
        console.log("Usuario guardado como objeto a la lista");
        // Limpiamos los campos para que quede listo para otro registro
        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
        console.log("Se limpiaron los campos");
        //llamar a la renderizacion
        mostrarUsuario()
};

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
};

cambiarEstado () {
    //Alterna estado de activo a inactivo
};

validarFormulario () {
    /*Dentro de agregarUsuario?
    Ningún campo puede estar vacío.
    Edad debe ser un número mayor a 0. */
};