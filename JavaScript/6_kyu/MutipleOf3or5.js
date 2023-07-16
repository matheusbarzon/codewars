function solution(number){

  var sum_of_number = 0;

  for (let i = number-1; i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum_of_number += i
    }
  }

  return sum_of_number;

}