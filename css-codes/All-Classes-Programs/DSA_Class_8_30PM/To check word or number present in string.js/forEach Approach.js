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
  let count = 0;
  str1.forEach((word1) => {
    // forEach always return undefined
    if (word1 == word) {
      count = 1;
      console.log("true");
    }
  });
  console.log(count);
  if (count == 0) console.log("false");
};

toCheckWordInString("My name is Balaji my roll no is 10", 10);
