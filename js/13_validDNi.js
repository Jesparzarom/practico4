$(document).ready(function() {
    $("#validar").click(function() {

        var dni = $("#dni").val();
        var dnip =dni.split(".");
        var memory = dnip.join("")
        if ((memory.length < 7) || (memory.length > 9)) {
            $("#resultado").html("Error: el número de DNI ingresado no tiene el formato válido (xxx.xxx.xxx)");
            return;
        }
        $("#resultado").html("verdadero");
    });
});
