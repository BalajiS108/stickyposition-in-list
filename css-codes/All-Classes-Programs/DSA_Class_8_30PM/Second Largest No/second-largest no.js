/**
 * Problem Statement:- Find second largest no from given array.
 * Algorithm:-
 * Define the function having parameter as array which in input.
 * 1.define max & second max no as max & s_max respectively & assign arr[0] & arr[1]
 *      to them resp.
 * 2.use the for loop for further comparisons & swapping.
 * 3.if max is less than s_max then swap these two nos & in else part i.e max>s_max
 *   3.1. it means next no. is < than max but not known w.r.t. s_max
 *   3.2  hence comapre these two nos & if arr[i]>s_max then put value of arr[i]
 *        in s_max.
 * 4.repeat over complete array & return s_max as final result.
 */

const findSecondLargestNo = (arr) => {
  let max = arr[0];
  let s_max = arr[1];
  let temp = 0;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      s_max = max;
      max = arr[i];
    } else {
      if (arr[i] > s_max && arr[i] < max) {
        s_max = arr[i];
      }
    }
  }
  return s_max;
};
console.log(
  findSecondLargestNo([
    20, 45, 79, 8, 1, 306, 303, 3, 7, 8, 82, 500, 500, 20, 100, 102, 403, 203,
    304, 305,
  ])
);
