function persistence(num) {
  var counts = 0;

  do {
    var list_digit = (''+num).split('');
    if (list_digit.length == 1) {
      break;
    }

    var times = 1;
    list_digit.forEach(element => times *= element);
    num = times;

    counts++;

  } while (true);


  return counts;

}