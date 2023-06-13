function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = number; i >= 2; i--) {
      result *= i;
    }
  
    return result;
  }
  
  function calculateFactorials() {
    const factorials = [];
  
    for (let i = 1; i <= 10; i++) {
      const fact = factorial(i);
      factorials.push(fact);
    }
  
    return factorials;
  }
  
  const factorialsArray = calculateFactorials();
  console.log(factorialsArray);