//method 1
const checkPalindrome = (inputA) => {
  if (!(inputA.length > 0)) {
    return "Please enter a valid word";
  }
  for (let i = 0, j = inputA.length - 1; i < inputA.length / 2; i++, j--) {
    if (!(inputA[i] === inputA[j])) {
      return "Words are not in Palindrome";
    }
    return "Words are Palindrome";
  }
};
console.log(checkPalindrome("abbac"));
// method 1 refined
const checkPalindrome2 = (inputA) => {
  if (!(inputA.length > 0)) {
    return "Please enter a valid word";
  }
  for (let i = 0; i < inputA.length / 2; i++) {
    if (!(inputA[i] === inputA[inputA.length - i - 1])) {
      return "Words are not in Palindrome";
    }
    return "Words are Palindrome";
  }
};
console.log(checkPalindrome2("madam"));
