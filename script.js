const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

peso.focus();

// ENTER no peso → vai para altura
peso.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    altura.focus();
  }
});

// ENTER na altura → calcula
altura.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    btnCalcular.click();
  }
});

btnCalcular.addEventListener("click", () => {
  if (peso.value > 0 && altura.value > 0) {
    const pesoValor = parseFloat(peso.value);
    const alturaMetros = parseFloat(altura.value) / 100;

    const imc = pesoValor / (alturaMetros * alturaMetros);

    let mensagem = "";
    let classe = "";

    if (imc < 18.5) {
      classe = "alert-primary";
      mensagem = `Abaixo do peso (Magreza): ${imc.toFixed(2)}`;
    } else if (imc < 25) {
      classe = "alert-success";
      mensagem = `Eutrófico (Peso Normal ou Adequado): ${imc.toFixed(2)}`;
    } else if (imc < 30) {
      classe = "alert-warning";
      mensagem = `Sobrepeso (Pré-obesidade): ${imc.toFixed(2)}`;
    } else if (imc < 35) {
      classe = "alert-danger";
      mensagem = `Obesidade Grau I: ${imc.toFixed(2)}`;
    } else if (imc < 40) {
      classe = "alert-danger";
      mensagem = `Obesidade Grau II (Severa): ${imc.toFixed(2)}`;
    } else {
      classe = "alert-dark";
      mensagem = `Obesidade Grau III (Mórbida/Grave): ${imc.toFixed(2)}`;
    }

    resultado.innerHTML = `<div class="alert ${classe} text-center" role="alert">
      ${mensagem}
    </div>`;

    peso.value = "";
    altura.value = "";

    peso.focus();
  } else {
    resultado.innerHTML = `<div class="alert alert-secondary text-center" role="alert">
      Digite valores válidos
    </div>`;
  }
});
