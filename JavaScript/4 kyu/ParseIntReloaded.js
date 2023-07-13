function numberToString (arr, final_multiple = 1) {
  const unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decimal = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let awnser = 0;
  for (let index = arr.length-1; index >= 0; index--) {

    let multiple = 1;
    if (arr[index] == "hundred") {
      multiple = 100;
      index--;
    }

    let getIndex = unit.indexOf(arr[index]);

    if (getIndex === -1) {
      getIndex = decimal.indexOf(arr[index]) * 10;
    }

    awnser += getIndex * multiple;

  }

  return awnser * final_multiple;
}

function separateNumbers(arrayString) {
  let dictNumber = {
    million: [],
    thousand: [],
    hundred: [],
    decimal: [],
  };

  start = 0;
  end = arrayString.indexOf("million");
  if (end > -1) {
    dictNumber.million = arrayString.splice(start, end);
    arrayString.shift();
  }

  end = arrayString.indexOf("thousand");
  if (end > -1) {
    dictNumber.thousand = arrayString.splice(start, end);
    arrayString.shift();
  }

  end = arrayString.lastIndexOf("hundred");
  if (end > -1) {
    dictNumber.hundred = arrayString.splice(start, end);
    start = end;
  }

  dictNumber.decimal  = arrayString.slice(start);

  return dictNumber;

}

function parseInt(string) {

  let cleanArray = string
    .replace(/ and |-/g, " ")
    .split(" ");

  let dictNumber = separateNumbers(cleanArray);

  let awnser = 0;

  awnser += numberToString(dictNumber.million, 1000000);
  awnser += numberToString(dictNumber.thousand, 1000);
  awnser += numberToString(dictNumber.hundred, 100);
  awnser += numberToString(dictNumber.decimal);

  return awnser;
}

parseInt('one thousand three hundred and thirty-seven');
parseInt('two hundred forty-six');
