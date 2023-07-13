function alternate(n, firstValue, secondValue) {

  var list = []
  while (list.length != n) {
    (n - list.length == 1) ?
      list.push(firstValue) :
      list.push(...[firstValue,secondValue]);
  }

  return list;
}