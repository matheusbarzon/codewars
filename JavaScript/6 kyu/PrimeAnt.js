function primeAnt(n) {
  const isPrime = (number) => {
    for (let index = 2, sqrt = Math.sqrt(number); index <= sqrt; index++) {
      if (number % index === 0) {
        return false;
      }
    }
    return number > 1;
  };

  let actualArr = [];
  let countMoves = 0;
  let currentPosition = 0;

  while (countMoves < n) {
    if (currentPosition == actualArr.length) {
      actualArr.push(actualArr.length + 2);
    }

    if (!isPrime(actualArr[currentPosition])) {
      let smallestDivisor = 2;
      while (!(actualArr[currentPosition] % smallestDivisor == 0))
        smallestDivisor++;

      actualArr[currentPosition] = actualArr[currentPosition] / smallestDivisor;
      actualArr[currentPosition - 1] =
        actualArr[currentPosition - 1] + smallestDivisor;

      currentPosition--;
    } else {
      currentPosition++;
    }

    countMoves++;
  }

  return currentPosition;
}
