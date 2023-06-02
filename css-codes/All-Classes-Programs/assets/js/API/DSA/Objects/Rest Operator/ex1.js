// In JS Rest operator is also denoted by (three dots ...) & it is used to represent
//an indefinite no of arguments as an array

function sum(...numbers) {
  let sum1 = 0;
  console.log(numbers);
  for (let number of numbers) {
    sum1 += number;
  }
  return sum1;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
