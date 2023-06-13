//Verificar se e quadrado perfeito

function quadradoPerfeito(numero) {
  var raiznumero = Math.floor(Math.sqrt(numero));
  return raiznumero * raiznumero === numero;
}

function verificarQuadradoPerfeito() {
  var num = prompt("Insira um número");

  if (isNaN(num)) {
    alert("Por favor, insira um número válido.");
    return;
  }

  num = parseInt(num);

  if (quadradoPerfeito(num)) {
    alert(num + " é um quadrado perfeito.");
  } else {
    alert(num + " não é um quadrado perfeito.");
  }
}

//Para verificar basta colar o codigo no console e depois usar o "console.log(verificarQuadradoPerfeito());"