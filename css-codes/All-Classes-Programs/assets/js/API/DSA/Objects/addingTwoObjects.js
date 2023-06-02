const fun = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
console.log(fun({ a: 1, b: 2, c: 3 }, { d: 4, e: 5, f: 6 }));
