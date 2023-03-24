const horaVivo = document.getElementById("horaVivo");

function lives () {
  const fecha = new Date();
  const hora = fecha.toLocaleTimeString();
  horaVivo.textContent = hora;
}

function actualizarFecha() {
    const fecha = new Date();
    const parametros = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const hora = fecha.toLocaleDateString("es-MX",parametros );
    divFechaActual.textContent = hora;
  }

window.addEventListener("load", actualizarFecha())
window.addEventListener("load", lives())
setInterval (lives, 1000);