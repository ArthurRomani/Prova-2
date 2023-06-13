function verificarSenha(senha) {
    if (senha.length < 8) {
      return 'A senha deve ter pelo menos 8 caracteres.';
    }
    if (!senha.match(/[A-Z]/)) {
      return 'A senha deve conter pelo menos uma letra maiúscula.';
    }
    if (!senha.match(/[a-z]/)) {
      return 'A senha deve conter pelo menos uma letra minúscula.';
    }
    if (!senha.match(/[0-9]/)) {
      return 'A senha deve conter pelo menos um número.';
    }
    return 'A senha é válida!';
  }
  
  console.log(verificarSenha('Senha123')); // A senha é válida!
  console.log(verificarSenha('senha123')); // A senha deve conter pelo menos uma letra maiúscula.
  console.log(verificarSenha('Senha')); // A senha deve ter pelo menos 8 caracteres.
  console.log(verificarSenha('12345678')); // A senha deve conter pelo menos uma letra maiúscula.