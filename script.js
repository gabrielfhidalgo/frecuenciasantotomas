// Obtiene los elementos necesarios
var modal = document.getElementById("modalNovedades");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

// Función para abrir el modal
function openModal() {
    modal.style.display = "block"; // Mostrar el modal
    document.body.style.overflow = "hidden"; // Deshabilitar el desplazamiento del cuerpo
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none"; // Ocultar el modal
    document.body.style.overflow = "auto"; // Habilitar el desplazamiento del cuerpo
}

// Asignar eventos al botón y al botón de cerrar
btn.onclick = openModal; // Abre el modal al hacer clic
span.onclick = closeModal; // Cierra el modal al hacer clic en el botón de cerrar

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal(); // Cierra el modal
    }
}

// Prevenir el desplazamiento de la rueda cuando el modal está abierto
window.addEventListener('wheel', function(event) {
    if (modal.style.display === "block") {
        event.preventDefault(); // Evitar el desplazamiento
    }
}, { passive: false });

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pestañas = document.querySelectorAll('.pestaña');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const section = this.getAttribute('data-section');

            pestañas.forEach(pestaña => {
                pestaña.style.display = 'none'; // Oculta todas las pestañas
            });

            document.getElementById(section).style.display = 'block'; // Muestra la pestaña seleccionada
        });
    });
});

