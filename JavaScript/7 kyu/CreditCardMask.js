function maskify(cc) {

  var cc_masked = '';
  for (letter of cc) {
    cc_masked += (cc.length - cc_masked.length <= 4) ? letter : '#';
  }

  return cc_masked;

}