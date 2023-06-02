const checkPalindrome = (input) => {
  input = input.toLowerCase();
  let newStr = "";
  for (let i = 0; i < input.length; i++) {
    newStr = input[i] + newStr;
  }

  /* if (input === newStr) {
      return true;
    } else {
      false;
    } */

  return input === newStr;
};

const checkPalindromeV2 = (input) => {
  input = input.toLowerCase();
  let newStr = "";

  for (let i = input.length - 1; i >= 0; i--) {
    newStr = newStr + input[i];
  }

  /* if (input === newStr) {
        return true;
      } else {
        false;
      } */

  return input === newStr;
};

console.log(checkPalindrome("Madam"));
