let arr = [1, 2, 3, 4, 5, 6];
const result = arr
  .map((num) => {
    if (num % 2 === 0) {
      num = num * 3;
    }
    // console.log(num);
  })
  .filter((num) => {
    if (num % 2 == 0) {
      return num;
    }
  });
console.log(result);
