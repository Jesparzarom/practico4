//más códigos
var z = 0
var aleatorio = Math.round(Math.random() * 1);
var i; i = 1; 

while (i <= 4) {
    var numeroElegido = parseInt(prompt("¿Qué Número Es?"));
    if (aleatorio == numeroElegido) {
        document.write("¡¡¡Eres un Fenómeno Acertaste!!")
    }
    else {
        document.write("Has Fallado" + "<br>")
    };
    if (aleatorio == numeroElegido) {
        i = 5
    };
    if (aleatorio != numeroElegido) {
        z = z + 1
    };
    
    if (z == 4) {
        document.write("¡¡¡Volviste a fallar y ya no tienes más intentos!!")
    };
    i = i + 1;
}
