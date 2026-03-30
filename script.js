const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {
  if (peso.value > 0 && altura.value > 0) {
    const pesoValor = parseFloat(peso.value);
    const alturaMetros = parseFloat(altura.value) / 100;

    const imc = pesoValor / (alturaMetros * alturaMetros);

    resultado.innerText = imc.toFixed(2);
  } else {
    resultado.innerText = "Digite um valor válido";
  }
});
