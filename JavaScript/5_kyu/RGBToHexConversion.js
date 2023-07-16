function rgb(r, g, b){

  convert = (value) => {
    if (value <= 0) return '00';
    if (value >= 255) return 'FF';

    var each_hex = '';
    var hex_values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    if (value < 16) {
      each_hex += hex_values[value];
    }

    while (value >= 16) {
      var remainder = value%16;
      value = parseInt(value/16);

      each_hex += hex_values[value];
      each_hex += hex_values[remainder];

    }

    return each_hex.padStart(2, '0');

  }

  var final_hex = '';
  final_hex += convert(r);
  final_hex += convert(g);
  final_hex += convert(b);

  return final_hex;
}