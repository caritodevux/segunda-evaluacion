# segunda-evaluacion
# Panel de Gestión de Usuarios - EVA 2
**Estudiante:** Carolina Rehbein
**Carrera:** Analista Programador

## 1. Descripción del Proyecto
Aplicación web para la gestión de usuarios internos que permite el registro, validación, filtrado y cambio de estado de forma dinámica.

## 2. Reflexión sobre el uso de Inteligencia Artificial
Durante el desarrollo de esta evaluación, utilicé herramientas de Inteligencia Artificial (Gemini, copilot) como asistente técnico y de validación en los siguientes aspectos:

* **Modularización del código:** Solicité apoyo para separar las validaciones y procesos que inicialmente estaban concentrados de forma monolítica dentro de la función de registro. Esto me permitió tener funciones más atómicas y un código más limpio.
* **Toma de decisiones UI/UX:** Le consulté a la IA si era más óptimo utilizar listas (`<ul>`) o tablas (`<table>`) para mostrar este tipo de datos. Basado en su recomendación para visualizar información estructurada, refactoricé el HTML y JavaScript para utilizar un formato de tabla.
* **Optimización del DOM:** Pedí sugerencias para mejorar la inyección de datos en la tabla. La IA propuso crear la fila (`<tr>`) y utilizar `innerHTML` con *Template Literals* para inyectar las celdas, lo cual simplificó la creación de las filas y redujo la cantidad de código comparado con usar múltiples `createElement`.
* **Manejo de Eventos (Listeners):** Solicité orientación para aplicar correctamente los eventos en los botones y selectores, asegurando el uso adecuado de `addEventListener` y controlando la carga inicial con `window.onload`.
* **Debugging y Sincronización:** Utilicé la IA para revisar ambos documentos (HTML y JS) en busca de errores tipográficos y para asegurar que los identificadores (`id`) coincidieran de forma exacta, previniendo errores de referencia en consola.
* **Lógica de Filtros Avanzados:** Pedí asistencia para diseñar e implementar la lógica matemática y estructural del filtro por rangos de edad utilizando métodos de arreglos (`.filter()`).
* **Diseño e Interfaz Gráfica:** Finalmente, le solicité aplicar estilos visuales estructurados mediante el framework Bootstrap. Esto me permitió entregar una interfaz moderna, limpia y responsiva de manera ágil.

## 3. Funcionalidades Adicionales Implementadas
* Estadísticas en tiempo real de usuarios activos e inactivos.
* Filtro avanzado por rangos de edad.
* Eliminación de usuarios.