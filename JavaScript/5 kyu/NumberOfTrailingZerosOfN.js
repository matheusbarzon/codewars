function zeros (n) {

  let maxValue = (Math.log(n) / Math.log(5))
  let element = BigInt(0);
  for (let index = 1; index <= maxValue; index++) {
    element += BigInt(n) / BigInt(Math.pow(5, index));
  }

  return parseInt(element);

}