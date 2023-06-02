/**
 * Problem statement- AAAABBBCCD -> 4A3B2C1D
 *
 */

let str = "AAAABBBACCDABCCCBADDDAABAEFGHEFGH";
let str1 = str.split("");
// console.log(str1);
let obj = {};
let count = 0;
for (key of str1) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = ++obj[key];
  } else {
    count = 0;
    obj[key] = ++count;
  }
}
console.log(obj);
let str2 = "";

for (key1 in obj) {
  str2 = str2 + `${obj[key1]}${key1}`;
}
console.log(str2);
