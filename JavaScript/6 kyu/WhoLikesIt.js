function likes(names) {
  var text = '';
  switch (names.length) {
    case 0:
      text = 'no one likes this';
      break;
    case 1:
      text = `${names.shift()} likes this`;
      break;
    case 2:
      text = `${names.shift()} and ${names.shift()} like this`;
      break;
    case 3:
      text = `${names.shift()}, ${names.shift()} and ${names.shift()} like this`;
      break;
    default:
      text = `${names.shift()}, ${names.shift()} and ${names.length} others like this`;
  }

  return text;
}