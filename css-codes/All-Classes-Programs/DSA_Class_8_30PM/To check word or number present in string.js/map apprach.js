/**
 * Problem:To check whether particular word/number present in sentence or not using inbuilt function

String - Hello my name is Ankit
Test Case - "funny"
Output - False

String - Hello my name is Ankit
Test Case - "ankit"
Output - false
 */
const toCheckWordInString = (str, word) => {
  let str1 = str.split(" ");
  let result = str1.map((word1) => {
    return word1 == word;
  });
  for (let i = 0; i < result.length; i++) {
    if (result[i] === true) {
      return true;
    }
  }
  return false;
};

console.log(toCheckWordInString("My name is Balaji my roll no is 10", "name1"));
