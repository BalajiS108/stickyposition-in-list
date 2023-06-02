const checkString = (stringTxt, findWord) => {
  for (let i = 0; i < stringTxt.length; i++) {
    if (stringTxt[i] == findWord[0]) {
      let countPass = true;
      for (let j = 1; j < findWord.length; j++) {
        console.log(findWord[j], "findWord[j]");
        console.log(stringTxt[i + j], "stringTxt");
        if (findWord[j] !== stringTxt[i + j]) {
          countPass = false;
          break;
        }
      }
      if (countPass) {
        return true;
      }
    }
  }
};

let stringTxt = "Hello my name is ankit";
let findWord = "an";

var regult = checkString(stringTxt, findWord);
console.log(regult == undefined ? false : regult);
