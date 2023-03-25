$(document).ready(function() {
    $("#verificar").click(function() {
      var valor = $("#valor").val();
      var regex = /^\d+$/;
  
      if (regex.test(valor)) {
        $("#resultado").text(valor + " es un valor Entero Positivo");
      } else {
        $("#resultado").text(valor + " no es un valor Entero Positivo");
      }
    });
  });
  