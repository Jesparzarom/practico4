function winsize() {
  let windowSize = [window.innerWidth, window.innerHeight];
  return windowSize;
}

function obtenerNavegador() {
  const agente = navigator.userAgent;
  if (agente.indexOf("Edg") !== -1 || agente.indexOf("Edge") !== -1) {
    return "🌀Edge";
  } else if (agente.indexOf("Opera") !== -1 || agente.indexOf("OPR") !== -1) {
    return "⭕Opera";
  } else if (agente.indexOf("Chrome") !== -1) {
    return "🎯Chrome";
  } else {
    return "Navegador desconocido";
  }
}

document.write(
  "<main>",
  "  <h2>NAVEGADOR</h2>",
  "  <h3>" + obtenerNavegador() + "</h3>",
  "  <h2>PANTALLA</h2>",
  "  <h3>" + winsize()[0] + " x " + winsize()[1] + "</h3>",
  "</main>"
);

