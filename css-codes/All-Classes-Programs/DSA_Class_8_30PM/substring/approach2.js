const toCheckWordInString = (str, word) => {
  console.log();
  let k = 0;
  let str1 = str.split("");
  let word1 = word.split("");
  for (let i = 0; i < str1.length; i++) {
    let count = 0;
    k = i;
    for (let j = 0; j < word1.length; j++) {
      if (str1[k] == word1[j]) {
        //my
        count += 1;
        k += 1;
      }
    }
    // console.log(count);
    if (count === word.length) {
      return true;
    }
  }
  return false;
};

console.log(toCheckWordInString("My name is Balaji my roll no is 10", "is"));
