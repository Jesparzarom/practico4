const divHoraActual = document.getElementById("hora");
const divFechaActual = document.getElementById("fecha");

function actualizarHora() {
  const fecha = new Date();
  const hora = fecha.toLocaleTimeString();
  divHoraActual.textContent = hora;
}

function actualizarFecha() {
  const fecha = new Date();
  const hora = fecha.getUTCFullYear();
  divFechaActual.textContent = hora;
}


window.addEventListener("load", actualizarHora());
window.addEventListener("load", actualizarFecha());
