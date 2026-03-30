// ============================
// SELEÇÃO DOS ELEMENTOS (DOM)
// ============================

// Inputs de entrada
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

// Botão de ação
const btnCalcular = document.getElementById("btnCalcular");

// Área onde o resultado será exibido
const resultado = document.getElementById("resultado");

// Define foco inicial no campo de peso (melhora a experiência do usuário)
peso.focus();

// ============================
// NAVEGAÇÃO VIA TECLADO (UX)
// ============================

// ENTER no campo peso → move foco para altura
peso.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // evita comportamento padrão do formulário
    altura.focus(); // muda foco para o próximo campo
  }
});

// ENTER no campo altura → dispara o cálculo
altura.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    btnCalcular.click(); // simula clique no botão
  }
});

// ============================
// CÁLCULO DO IMC
// ============================

btnCalcular.addEventListener("click", () => {
  // Validação: garante que os valores são positivos
  if (peso.value > 0 && altura.value > 0) {
    // Conversão dos valores de entrada
    const pesoValor = parseFloat(peso.value);
    const alturaMetros = parseFloat(altura.value) / 100; // cm → metros

    // Fórmula do IMC
    const imc = pesoValor / (alturaMetros * alturaMetros);

    // Variáveis para mensagem e estilo visual (Bootstrap)
    let mensagem = "";
    let classe = "";

    // ============================
    // CLASSIFICAÇÃO DO IMC
    // ============================

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

    // Exibe resultado com estilo visual do Bootstrap (alert)
    resultado.innerHTML = `
      <div class="alert ${classe} text-center" role="alert">
        ${mensagem}
      </div>
    `;

    // Limpa os campos após o cálculo
    peso.value = "";
    altura.value = "";

    // Retorna foco para o primeiro campo
    peso.focus();
  } else {
    // Mensagem de erro caso os valores sejam inválidos
    resultado.innerHTML = `
      <div class="alert alert-secondary text-center" role="alert">
        Digite valores válidos
      </div>
    `;
  }
});
