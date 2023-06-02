//Write a function that takes an object and a value, and returns the key of the
//first property that has the specified value.

function getKeyByValue(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

const exampleObj = { a: 1, b: 2, c: 1 };
console.log(getKeyByValue(exampleObj, 2));
