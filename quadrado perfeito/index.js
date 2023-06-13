function verificaQuadradoPerfeito(numero) {
    
    var raiz = Math.sqrt(numero);
    
// Verificando  se a raiz quadrada é um número inteiro
    if (Number.isInteger(raiz)) {
      return true;
    } else {
      return false;
    }
  } 
  