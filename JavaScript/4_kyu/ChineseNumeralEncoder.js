function toChineseNumeral(num) {
  let numerals = {
    "-": "负",
    ".": "点",
    0: "零",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "七",
    8: "八",
    9: "九",
    10: "十",
  };

  let multiplier = {
    1: "",
    2: "十", // 10
    3: "百", // 100
    4: "千", // 1000
    5: "万", // 10000
  };

  let splitNumber = function (number) {
    let numberToString = number.toString();
    let indexDash = numberToString.indexOf("-");
    let finalArray = [numberToString];

    if (indexDash >= 0) {
      finalArray = [];
      finalArray.push(numberToString.slice(0, indexDash + 1));
      finalArray.push(numberToString.slice(indexDash + 1));
    }

    for (let i = 0; i < finalArray.length; i++) {
      let indexDot = finalArray[i].indexOf(".");
      if (indexDot >= 0) {
        decimal = finalArray[i].slice(indexDot + 1);
        finalArray[i] = finalArray[i].slice(0, indexDot);
        finalArray.push(".");
        finalArray.push(decimal);
        break;
      }
    }

    return finalArray;
  };

  let arr = splitNumber(num);
  let strChinese = arr
    .map(function (v, i) {
      if (isNaN(v)) {
        return numerals[v];
      }

      if (v == 10) {
        return numerals[v];
      }

      let beforeDot = arr.indexOf(".") == -1 || arr.indexOf(".") > i;

      let char = "";
      for (let i = 0, size = v.length; i < v.length; i++, --size) {
        if (beforeDot && v.length != 1 && v[i] == 0 && v[i - 1] != 0) {
          continue;
        }

        char += numerals[v[i]] + multiplier[size];
      }

      return char;
    })
    .join("");

  console.log(strChinese);
  return strChinese;
}

// toChineseNumeral(9); //'九'
// toChineseNumeral(-5); //'负五'
// toChineseNumeral(0.5); //'零点五'
// toChineseNumeral(10); //'十'
// toChineseNumeral(110); //'一百一十'
// toChineseNumeral(111); //'一百一十一'
// toChineseNumeral(1000); //'一千'
// toChineseNumeral(10000); //'一万'
toChineseNumeral(10006); //'一万零六'
toChineseNumeral(10306.005); //'一万零三百零六点零零五'

// let numerals = {
//   "-": "负",
//   ".": "点",
//   0: "零",
//   1: "一",
//   2: "二",
//   3: "三",
//   4: "四",
//   5: "五",
//   6: "六",
//   7: "七",
//   8: "八",
//   9: "九",
//   10: "十",
// };

// let multiplier = {
//   1: "",
//   2: "十", // 10
//   3: "百", // 100
//   4: "千", // 1000
//   5: "万", // 10000
// };
