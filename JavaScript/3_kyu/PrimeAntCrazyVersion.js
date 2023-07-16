function primeAnt(n) {
  let currentPosition = 0;
  let listOfPrime = new Set();

  const isPrime = function (number) {
    let i = 2;
    let sqrt = number ** 0.5;

    while (i <= sqrt) {
      if (number % i == 0) {
        return [false, i];
      }

      i++;
    }

    listOfPrime.add(number);

    return [number > 1, i];
  };

  let actualArray = Array.from({ length: 60 * 1000 }, (_, i) => i + 2);
  for (let index = 0; index < n; index++) {
    if (listOfPrime.has(actualArray[currentPosition])) {
      currentPosition++;
      continue;
    }

    [advancePosition, smallestDivisor] = isPrime(actualArray[currentPosition]);

    if (advancePosition) {
      currentPosition++;
      continue;
    }

    actualArray[currentPosition] /= smallestDivisor;
    actualArray[currentPosition - 1] += smallestDivisor;
    currentPosition--;
  }

  return actualArray.splice(0, currentPosition + 1);
}

qtdTest = 20; //2000;
max = 2 * 10 ** 6;
min = 10 ** 6;
for (let i = 0; i < qtdTest; i++) {
  moves = parseInt(Math.random() * (max - min) + min);
  primeAnt(moves);
}
