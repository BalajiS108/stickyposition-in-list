//Object literals make it easy to quickly create objects
//with properties inside the curly braces.

function hello(fName, lName) {
  return { fName, lName };
}
console.log(hello("Balaji", "Sawant"));

//Earlier Method

function hello(fName, lName) {
  return { fName: fName, lName: lName };
}
console.log(hello("Balaji", "Sawant"));
