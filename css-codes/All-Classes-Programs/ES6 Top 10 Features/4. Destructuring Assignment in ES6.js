//The destructuring assignment syntax is a JavaScript expression that makes
//it possible to unpack values from arrays,
//or properties from objects, into distinct variable.

//Destructuring Object
let obj = { name: "Balaji", mName: "Shivaji", lName: "Sawant" };
const { name, mName, lName } = obj;
console.log({ name, mName, lName });

//Destructuring Array
let arr = [1, 2, 3, 4, 5, 6, 7];
// const [first, second, third, fourth, fifth, sixth, seventh] = arr;
const [, , , , , sixth1, seventh1] = arr;

console.log({ sixth1, seventh1 });

//Earlier Versions
let obj1 = { one: 1, two: 2 };
console.log(obj1.one);
console.log(obj1.two);
