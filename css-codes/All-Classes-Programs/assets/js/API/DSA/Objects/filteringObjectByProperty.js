//Write a function that takes an array of objects and returns a new array with only
//the objects that have a specified property.

function filterObjectsByProperty(arr, prop) {
  return arr.filter((obj) => obj.hasOwnProperty(prop));
}
const exampleArr = [
  { name: "Alice", age: 25 },
  { name: "Bob", height: 175 },
  { name: "Charlie", age: 30, height: 180 },
];
console.log(filterObjectsByProperty(exampleArr, "age"));
