/**Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz"
 * instead of the number, and for the multiples of five, print "Buzz".
 * For numbers which are multiples of both three and five, print "FizzBuzz"
 * Algo
 * 1.take input from user
 * 2.check for i/p corectness
 * 2.1 n>0
 * 2.2 valid number
 * 3. check i divisible by 3 & 5 both
 * 3.1 if yes print FizzBuzz
 * 3. check i divisible by 3
 * 3.1 if yes print Fizz
 * 3. check i divisible by  5
 * 3.1 if yes print Buzz
 * 3. else print number
 *
 */

function fun(n) {
  if (typeof n !== "number") {
    console.log("Enter valid number");
    return 0;
  }
  if (n < 1) {
    console.log("Enter number greater than 0");
    return 0;
  }
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fun(20);
