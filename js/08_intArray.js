
function sumArray() {
  const numeros = document.getElementById("input").value.toString();
  return numeros
    .trim()
    .split(" ")
    .filter((numero) => !isNaN(numero))
    .reduce((acc, curr) => acc + parseInt(curr), 0);
}

function result() {
  const result = sumArray();
  if (!isNaN(result)) {
    document.getElementById("prompt").innerHTML = result;
  } else {
    document.getElementById("prompt").innerHTML = 0;
  }
}
