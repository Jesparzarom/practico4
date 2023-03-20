const divHoraActual = document.getElementById("hora");
const divFechaActual = document.getElementById("fecha");

function actualizarHora() {
  const fecha = new Date();
  const hora = fecha.toLocaleTimeString();
  divHoraActual.textContent = hora;
}

function actualizarFecha() {
  const fecha = new Date();
  const parametros = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const hora = fecha.toLocaleDateString("es-MX",parametros );
  divFechaActual.textContent = hora;
}


window.addEventListener("load", actualizarHora());
window.addEventListener("load", actualizarFecha());
