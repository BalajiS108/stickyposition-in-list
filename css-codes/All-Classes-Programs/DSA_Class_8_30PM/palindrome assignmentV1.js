/**
 * PS:-- Largest Palindrome in a given string
- All Palindrome in a string

Ex - "Hello Mam, how are you. Madam, do you know racecar?
1- "racecar"
2- ["mam", "madam", "racecar"]

*1.Take the input as string
 2.convert all words into lowercase
 3.check the whether individual words are palindrome  using two loops
 4.return words those are palindrome
 5.Find the largest one from the returned array
 */

const palindromeString = (str) => {
  str = str.toLowerCase().replace(/[^a-zA-Z ]/g, "");
  let str1 = str.trim().split(" ");
  l = str1.length;
  let arr = [];
  //   console.log(str1);
  for (let i = 0; i < l; i++) {
    let count = 0;
    for (let j = 0; j < Math.floor(str1[i].length / 2); j++) {
      if (!(str1[i][j] === str1[i][str1[i].length - 1 - j])) {
        break;
      } else {
        count += 1;
      }
    }
    // console.log(count, Math.floor(str1[i].length / 2));
    if (count === Math.floor(str1[i].length / 2)) {
      arr.push(str1[i]);
    }
  }
  console.log(arr);
  let temp = "";
  for (let i = 0; i < arr.length; i++) {
    if (temp.length < arr[i].length) {
      temp = arr[i];
    }
  }
  return temp;
};
console.log(
  palindromeString("Hello Mam, how are you. Madam, do you know racecar?")
);
