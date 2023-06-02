// -----------------------Q3------------------------
/**
 *  Print Pattern  11111
 *                 2222
 *                 333
 *                 44
 *                 5
 
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
const numberPattern1 = (n) => {
  let k = 1;
  console.log("\n");
  console.log("Pattern Q3");
  if (typeof n !== "number") {
    console.log("Enter a valid number");
    return 0;
  }
  if (n < 0) {
    console.log("Please enter valid no as per expected pattern");
  }
  for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = i; j <= n; j++) {
      str = str + k;
    }
    console.log(str);
    k += 1;
  }
};
numberPattern1(5);
