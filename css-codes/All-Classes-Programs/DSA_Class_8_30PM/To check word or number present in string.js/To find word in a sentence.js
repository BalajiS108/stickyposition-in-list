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
  console.log(word);
  let str1 = str.split(" ");
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == word) {
      return true;
    }
  }
  return false;
};

console.log(toCheckWordInString("My name is Balaji my roll no is 10", 101));
