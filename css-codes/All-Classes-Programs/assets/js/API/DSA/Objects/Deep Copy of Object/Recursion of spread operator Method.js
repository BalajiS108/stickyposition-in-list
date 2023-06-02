const deepCopyingObject = (obj) => {
  let obj1 = {};
  for (let key in obj) {
    if (typeof key === Object && typeof key != null) {
      obj1[key] = deepCopyingObject(obj[key]);
    } else {
      obj1[key] = obj[key];
    }
  }
  return obj1;
};
let obj2 = { a: 1, b: { c: 2, d: 3, e: { f: 6, g: 7 } } };
let obj3 = deepCopyingObject(obj2);
console.log(obj3);
obj2 = { a: 1, b: { c: 2, d: 3, e: { f: 6, g: 9 } } };
console.log(obj2);
console.log(obj3);
