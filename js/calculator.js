const pantalla = $("#val");
const enlaces = $("a").not(
  "[value='='],[value='C'],[value='CE'],[value='%'],[value='+/-']"
);
const especials = $(
  "a[value='='],a[value='C'],a[value='CE'],a[value='%'],a[value='+/-']"
);

var textos = [];
var memory = "";

// CREA UN ARRAY CON EXPRESION TIPO 1+2-3*4/5
enlaces.on("click", function () {
  const texto = $(this).text().trim();
  memory = texto;
  if (texto) {
    textos.push(texto);
  }
  const expresion = textos.join("");
  pantalla.text(expresion);
});

// OTRAS OPERACIONES
especials.on("click", function () {
  const opes = $(this).text().trim();
  console.log(opes);

  // EVALUA LA EXPRESIÓN DEL ARRAY
  if (opes === "=") {
    const expresion = textos.join("");
    const resul = eval(expresion);
    pantalla.text(resul);
    textos = [resul];
  }

  // PRIMERO EVALUA SI HAY UNA EXPRESIÓN Y LUEGO LA DIVIDE / 100 => %
  if (opes === "%") {
    const expresion = textos.join("");
    const resul = eval(expresion) / 100;
    pantalla.text(resul);
    textos = [resul];
  }

  // INVIERTE LOS SIGNOS ===========================
  if (opes === "±") {
    const resul = eval(textos.join("")*-1);
    pantalla.text(resul)
  }
  //======================================================

  // LIMPIA TODA LA PANTALLA

  if (opes === "C") {
    textos = [];
    memory = 0;
    pantalla.text(textos.join(""));
  }

  // RETORNA AL ULTIMO VALOR
  if (opes === "CE") {
    pantalla.text(memory);
  }
});
