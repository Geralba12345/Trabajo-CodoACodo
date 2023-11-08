const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'


}

function validarFormulario() {
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    const suscripcion = document.getElementById("suscripcion").checked;

    // Validar que los campos no estén vacíos
    if (nombre === "" || email === "" || mensaje === "" || !suscripcion) {
        alert("Todos los campos son obligatorios. Asegúrese de completar todos los puntos.");
        return false;
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
    }

    // Si todo es correcto, el formulario se enviará
    return true;
}

// API REST

const URL = 'https://api.thecatapi.com/v1/images/search';

const img = document.querySelector('.gatitos');
const cambiarFotoButton = document.getElementById('cambiarFoto');

function obtenerNuevaFoto() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      img.src = data[0].url;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Llama a la función para obtener la primera foto cuando se carga la página
obtenerNuevaFoto();

// Cambiar la foto cuando se hace clic
cambiarFotoButton.addEventListener('click', obtenerNuevaFoto);


function filtrarProductos(categoria) {
  const productos = document.querySelectorAll('.producto');
  productos.forEach(producto => {
      if (producto.getAttribute('data-categoria') === categoria || categoria === 'todos') {
          producto.classList.add('active');
      } else {
          producto.classList.remove('active');
      }
  });

  // Mostrar u ocultar la descripción según la categoría seleccionada
  const descripcionTienda = document.getElementById('descripcionTienda');
  if (categoria === 'todos') {
    descripcionTienda.style.display = 'block';
  } else {
    descripcionTienda.style.display = 'none';
  }
}




