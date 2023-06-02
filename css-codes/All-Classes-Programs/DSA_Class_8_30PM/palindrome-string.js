/**
 * Algorithm
 * str-i/p string
 *
 */

// const palindromeString = (str) => {
//   let str1 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     str1 += str[i];
//   }
//   return str1 === str;
// };
// console.log(palindromeString("aba"));

// -------------------------------------------------------

const palindromeStringV1 = (str2) => {
  l = str2.length;
  str3 = "";
  for (
    let i = Math.floor(str2.length - 1);
    i >= Math.floor(str2.length - 1 / 2 - 1);
    i--
  ) {
    str3 += str2[i];
  }
  console.log(str3);

  console.log(str2.substr(0, str2.length / 2));
  return str3 === str2.substr(0, str2.length / 2 - 1);
};
console.log(palindromeStringV1("madam"));
