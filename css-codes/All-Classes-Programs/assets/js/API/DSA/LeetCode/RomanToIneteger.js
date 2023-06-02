/**
 * Roman to Integer
 * Algorithm:-
 * Take the function input as a string & validate the same.
 * If non-roman letters are entered then show message as invalid letters.
 * create object where roman letter as key & its numerical value as value of object.
 * use the for loop to traverse over all roman letters
 * for every roman letter its numeric value is added to the previous roman letter's value
 * if the current roman letter has value less that next roman letter then after adding subtarct
 * numeric value twice of that value.
 */

var romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let number = 0;

  for (let i = 0; i < s.length; i++) {
    if (obj.hasOwnProperty(s[i])) {
      number = number + obj[s[i]];
      if (obj[s[i]] < obj[s[i + 1]] && obj[s[i]] != null) {
        number = number - 2 * obj[s[i]];
      }
    } else {
      console.log("Enter Roman nos. only");
      break;
    }
  }
  console.log(number);
};
romanToInt("III");
