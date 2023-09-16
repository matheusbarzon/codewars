export function determinant(m: number[][]) {
  if (m.length == 1) {
    return m[0][0];
  }

  if (m.length == 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }

  let add: Array<number> = new Array(m.length);
  let sub: Array<number> = new Array(m.length);

  let indexAdd = 0;
  let indexSub = 0;

  for (let i = 0; i < m.length; i++) {
    indexAdd = i;
    for (let j = 0; j < m[i].length; j++) {
      indexAdd = j + i;
      if (indexAdd > m[i].length - 1) {
        indexAdd -= m[i].length;
      }

      indexSub = m[i].length - 1 + j - i;
      if (indexSub > m[i].length - 1) {
        indexSub -= m[i].length;
      }

      add[j] = (add[j] ?? 1) * m[i][indexAdd];
      sub[j] = (sub[j] ?? 1) * m[i][indexSub];
    }
  }

  let determinant = 0;
  for (let i = 0; i < m.length; i++) {
    determinant += add[i] - sub[i];
  }

  console.log(add);
  console.log(sub);
  console.log(determinant);
  return determinant;
}

determinant([
  [1, 3],
  [2, 5],
]);
// -1

// determinant([
//   [1, 9, 5],
//   [3, 7, 8],
//   [10, 4, 2],
// ]);
// // 358
