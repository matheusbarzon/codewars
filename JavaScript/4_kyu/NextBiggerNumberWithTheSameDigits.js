function nextBigger(n) {
  let newNumber = -1;

  let arrNumber = n.toString().split("");

  for (
    let indexFullNumber = n.toString().length - 2;
    indexFullNumber >= 0;
    indexFullNumber--
  ) {
    let firstPart = arrNumber.slice(0, indexFullNumber);
    let secondPart = arrNumber.slice(indexFullNumber, arrNumber.length);

    for (
      let indexSecondPart = 0;
      indexSecondPart < secondPart.length;
      indexSecondPart++
    ) {
      let secondPartWithoutIndex = secondPart.slice(0);
      secondPartWithoutIndex = secondPartWithoutIndex.sort();

      let numberInTest = secondPartWithoutIndex[indexSecondPart];
      secondPartWithoutIndex.splice(indexSecondPart, 1);

      let cadidateArr = [
        ...firstPart,
        ...numberInTest,
        ...secondPartWithoutIndex,
      ];

      let candidateNumber = parseInt(cadidateArr.join(""));

      if (candidateNumber > n) {
        newNumber = candidateNumber;
        break;
      }
    }

    if (newNumber != -1) {
      break;
    }
  }

  return newNumber;
}
