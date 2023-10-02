var numeroSecreto = parseInt(Math.random() * 11);
var tentativasRestantes = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativasRestantes > 0) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou! O número era " + numeroSecreto;
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Você tem que escolher um número de 0 a 10";
    } else {
      tentativasRestantes--;

      if (chute > numeroSecreto) {
        elementoResultado.innerHTML = "Você errou, tente um número mais baixo.";
      } else {
        elementoResultado.innerHTML = "Você errou, tente um número mais alto. ";
      }
    }
  } else {
    elementoResultado.innerHTML = "Suas tentativas acabaram. O número correto era " + numeroSecreto;
  }
}