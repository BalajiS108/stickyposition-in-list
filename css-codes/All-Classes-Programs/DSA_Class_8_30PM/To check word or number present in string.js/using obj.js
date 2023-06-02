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
  let str1 = str.split(' ');
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj.hasOwnProperty(str1[i])) {
      obj[str1[i]] = i;
    }
  }
  if (obj.hasOwnProperty(word)) {
    return true;
  } else {
    return false;
  }

  //   console.log(objkeys);
};

console.log(toCheckWordInString('My name is Balaji my roll no is 10', 'Balaji1'));
