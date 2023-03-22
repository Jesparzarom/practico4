document.getElementById("abrir-ventana").addEventListener("click", function() {
    // Crea una nueva ventana con un tamaño específico y sin barra de herramientas
    var nuevaVentana = window.open("", "", "width=400,height=400,toolbar=no");
  
    // Genera un número aleatorio entre 1 y 100
    var numeroRandom = Math.floor(Math.random() * 100) + 1;
  
    // Crea un elemento <p> en la nueva ventana y agrega el número aleatorio dentro
    var parrafo = nuevaVentana.document.createElement("p");
    var estilo = nuevaVentana.document.createElement("style");
    parrafo.textContent = numeroRandom;
    estilo.textContent = "p {font-size: 100vw;}";
  
    // Agrega el elemento <p> a la nueva ventana
    nuevaVentana.document.body.appendChild(estilo);
    nuevaVentana.document.body.appendChild(parrafo);
  });
  

