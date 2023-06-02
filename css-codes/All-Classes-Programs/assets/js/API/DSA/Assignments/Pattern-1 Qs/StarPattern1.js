/**
 *  Print Pattern *****
 *                ****
 *                ***
 *                **
 *                *
 *
 * Algorith:-
 * 1.Create function
 * 2.Check for valid input using typeof function
 * 2.1check if the input is negative
 * 3.After i/p validation use two for loops
 * 3.1 outer for loop for each row
 * 3.2 inner for loop for incr. column
 * 4. return the result
 */

const starPattern1 = (n) => {
  console.log("Pattern Q1");
  if (typeof n !== "number") {
    console.log("Enter a valid number");
    return 0;
  }
  if (n < 0) {
    console.log("Please enter valid no as per expected pattern");
  }
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = n; j > i; j--) {
      str = str + "*";
    }
    console.log(str);
  }
};
starPattern1(5);
