// -----------------------Q3------------------------
/**
 *  Print Pattern  *
 *                ***
 *               *****
 *              *******
 *             *********
 
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
  result = "";
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = i + 1; j < n; j++) {
      str = str + " ";
    }
    for (let j = 0; j <= i; j++) {
      str = str + "*";
    }
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    result = result + str + "\n";
  }
  return result;
};
console.log(starPattern1(5));
