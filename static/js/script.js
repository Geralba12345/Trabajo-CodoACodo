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

// function validarFormulario() {
//     // Obtener los valores de los campos
//     const nombre = document.getElementById("nombre").value;
//     const email = document.getElementById("email").value;
//     const mensaje = document.getElementById("comentario").value;
//     const suscripcion = document.getElementById("suscripcion").checked;

//     // Validar que los campos no estén vacíos
//     if (nombre === "" || email === "" || comentario === "" || !suscripcion) {
//         alert("Todos los campos son obligatorios. Asegúrese de completar todos los puntos.");
//         return false;
//     }

//     // Validar el formato del correo electrónico
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!email.match(emailRegex)) {
//         alert("Por favor, ingrese una dirección de correo electrónico válida.");
//         return false;
//     }

//     // Si todo es correcto, el formulario se enviará
//     return true;
// }

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

  // ocultar la descripción según la categoría seleccionada
  const descripcionTienda = document.getElementById('descripcionTienda');
  if (categoria === 'todos') {
    descripcionTienda.style.display = 'block';
  } else {
    descripcionTienda.style.display = 'none';
  }
}

//formulario

// function agregarComentario() {
//   const nombre = document.getElementById("nombre").value;
//   const email = document.getElementById("email").value;
//   const comentario = document.getElementById("comentario").value;
//   const suscripcion = document.getElementById("suscripcion").checked;

//   // Validar que la casilla de suscripción esté marcada
//   if (!suscripcion) {
//     alert("Debe aceptar la Cláusula de Contacto para enviar el comentario.");
//     return;
//   }

//   // Validar el formato del correo electrónico
//   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//   if (nombre && email && comentario) {
//     // Verificar si el correo electrónico tiene el formato correcto
//     if (!email.match(emailRegex)) {
//       alert("Por favor, ingrese una dirección de correo electrónico válida.");
//       return;
//     }

    // const comentariosLista = document.getElementById("comentarios-lista");
    // const nuevoComentario = document.createElement("div");
    // nuevoComentario.classList.add("comentario");
    // nuevoComentario.innerHTML = `<strong>${nombre}:</strong> <br><strong>${email}</strong> <br>${comentario}`;
    // comentariosLista.appendChild(nuevoComentario);

    // Limpiar el formulario
//     document.getElementById("nombre").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("comentario").value = "";
//     document.getElementById("suscripcion").checked = false;
//   } else {
//     alert("Por favor, complete todos los campos del formulario.");
//   }
// }




// En la instancia de Vue.js
// const app = new Vue({
//     el: '#app',
//     data: {
//         nombre: '',
//         email: '',
//         comentarioTexto: '',
//         suscripcion: false,
//         comentarios: []  // Array para almacenar los comentarios
//     },
//     methods: {
//         agregarComentario: function () {
//             if (!this.suscripcion) {
//                 alert("Debe aceptar la Cláusula de Contacto para enviar el comentario.");
//                 return;
//             }

//             // Validar el formato del correo electrónico (puedes agregar la validación aquí si es necesario)

//             // Agregar el nuevo comentario al array de comentarios
//             this.comentarios.push({
//                 nombre: this.nombre,
//                 email: this.email,
//                 comentario: this.comentarioTexto
//             });

//             // Limpiar el formulario
//             this.nombre = '';
//             this.email = '';
//             this.comentarioTexto = '';
//             this.suscripcion = false;
//         }
//     }
// });

