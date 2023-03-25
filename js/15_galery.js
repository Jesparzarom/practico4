const closeButton = document.getElementsByClassName('close')[0];
const imagenes = document.getElementsByClassName('imagen');

function resaltarImagen(elemento) {
  elemento.classList.add('resaltada');
}

function restaurarImagen() {
  this.classList.remove('resaltada')
}

function modal() {
  // Obtener el elemento que cierra el modal y agregar un event handler onclick para cerrarlo
  closeButton.onclick = function() {
      const modal = document.getElementById('myModal');
      modal.style.display = 'none';
  }

  // Agregar un event handler onclick a cada imagen
  for (let i = 0; i < imagenes.length; i++) {
      imagenes[i].onclick = function() {
          // Obtener el URL de la imagen
          const imageUrl = this.src;

          // Obtener el enlace de descarga y establecer su atributo href al URL de la imagen
          const downloadLink = document.getElementById('download-link');
          downloadLink.href = imageUrl;

          // Mostrar el modal
          const modal = document.getElementById('myModal');
          modal.style.display = 'block';
      }
  }
};

// Agregar event listeners para los eventos onmouseover y onmouseout a cada imagen
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].onmouseover = function() {
        resaltarImagen(this);
    }
    imagenes[i].onmouseout = function() {
        restaurarImagen.call(this);
    }
}


document.addEventListener('DOMContentLoaded', function() {
  modal();
});