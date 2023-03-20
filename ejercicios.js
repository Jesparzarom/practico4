var x = parseInt(prompt("Dime un número"));
var y = parseInt(prompt("Dime otro"));
var suma = x + y;
var resultado = ("La suma de los dos número es " + suma);
document.write(resultado);



// Manejo de operaciones matemáticas
var aleatorio = Math.round(Math.random() * 3);
var resultado = ("El número aleatorio es " + aleatorio);
document.write(resultado);



//Manejo de condicionales
var edad = parseInt(prompt("Dime tu edad"));
if (edad > 18) { document.write("Eres mayor de edad") }
else { document.write("Eres menor de edad") };



//Manejo de mensajes de confirmación
if (confirm("¿Quieres ir a la Página de Tecnologia?")) {
    window.open("https://www.areatecnologia.com")
}
else {
    3
    alert("Esta bien nos quedamos aqui")
}



//Manejo de sentencia repetitiva
var i; i = 1; while (i <= 5) {
    document.write("Esto Se Repite");
    i = i + 1;
}



//más códigos
var z = 0
var aleatorio = Math.round(Math.random() * 1);
var i; i = 1; while (i <= 4) {
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
    4
    if (z == 4) {
        document.write("¡¡¡Volviste a fallar y ya no tienes más intentos!!")
    };
    i = i + 1;
}



//más códigos
function sumar(x, y) {
    var total = x + y;
}
sumar(1, 2);
var sumaNueva = total + 5;
alert(sumaNueva);



//Manejo de tiempo con javascript
setTimeout("mostrarAviso()", 3000);
function mostrarAviso() {
    alert("Han pasado los tres segundos");
}



//manejo de invervalos
var bucleRepetir = setInterval("repetir()", 1000);
function repetir() {
    alert("Ha pasado 1 segundo");
}