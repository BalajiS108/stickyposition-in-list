//Write a function that takes an object and returns its keys as an array.

const fun = (obj) => {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  return keys;
};
console.log(fun({ a: 1, b: 2, c: 3 }));
