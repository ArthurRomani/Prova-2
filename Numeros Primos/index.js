// QUESTÂO 1 - Função para saber se um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000


//Função para mostrar todos os numeros primos de 1 a 1000
    function isPrime(number) {
        if (number < 2) {
          return false;
        }
      
        for (let i = 2; i < number; i++) {
          if (number % i === 0) {
            return false;
          }
        }
      
        return true;
      }
      
      function listPrimes() {
        const primes = [];
      
        for (let i = 1; i <= 1000; i++) {
          if (isPrime(i)) {
            primes.push(i);
          }
        }
      
        return primes;
      }
      
      const primeNumbers = listPrimes();
      console.log(primeNumbers);

      //Para listar os numeros primos de 1 a 1000, basta copiar o codigo no console 


