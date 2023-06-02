const add = (a) => (b) => b ? add(a + b) : a;
const result = add(1)(2)(3)();
console.log(result);
