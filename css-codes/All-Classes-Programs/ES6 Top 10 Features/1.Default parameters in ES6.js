//In ES6, we can put the default values right in the signature of the functions.

var calculateArea = function (height = 10, width = 80) {
  // write logic
  let area = 0.5 * (height * width);
  // console.log(sum)
  return area;
};
console.log(calculateArea());
