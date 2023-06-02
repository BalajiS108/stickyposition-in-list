var intToRoman = function (num) {
  let obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let arr = Object.keys(obj);
  let l = arr.length;
  let str1 = '';
  let str = '';
  let a1;
  let b1;
  for (let i = l - 1; i >= 0; i--) {
    while (num >= obj[arr[i]]) {
      if (num === 4 || num === 9) {
        str1 = 'I';
        str = str + str1 + arr[i + 1];
        num = num - obj[arr[i + 1]];
      } else if ((num >= 40 && num <= 49) || (num >= 90 && num <= 99)) {
        if (num < 90) {
          a1 = 40;
        } else {
          a1 = 90;
        }
        str1 = 'X';
        str = str + str1 + arr[i + 1];
        num = num - a1;
      } else if ((num >= 400 && num <= 499) || (num >= 900 && num <= 999)) {
        if (num < 900) {
          b1 = 400;
        } else {
          b1 = 900;
        }
        str1 = 'C';
        str = str + str1 + arr[i + 1];
        num = num - b1;
      } else {
        str = str + arr[i];
        num = num - obj[arr[i]];
      }
    }
    console.log(str);
  }
  return str;
};
console.log(intToRoman(1));
