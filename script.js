const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {
  if (peso.value > 0 && altura.value > 0) {
    const pesoValor = parseFloat(peso.value);
    const alturaMetros = parseFloat(altura.value) / 100;

    const imc = pesoValor / (alturaMetros * alturaMetros);

    if (imc < 18.5) {
      resultado.innerText = `Abaixo do peso (Magreza): ${imc.toFixed(2)}`;
    } else if (imc >= 18.5 && imc < 25) {
      resultado.innerText = `Eutrófico (Peso Normal ou Adequado): ${imc.toFixed(2)}`;
    } else if (imc >= 25 && imc < 30) {
      resultado.innerText = `Sobrepeso (Pré-obesidade): ${imc.toFixed(2)}`;
    } else if (imc >= 30 && imc < 35) {
      resultado.innerText = `Obesidade Grau I: ${imc.toFixed(2)}`;
    } else if (imc >= 35 && imc < 40) {
      resultado.innerText = `Obesidade Grau II (Severa): ${imc.toFixed(2)}`;
    } else if (imc >= 40) {
      resultado.innerText = `Obesidade Grau III (Mórbida/Grave): ${imc.toFixed(2)}`;
    }
  } else {
    resultado.innerText = "Digite um valor válido";
  }
});
