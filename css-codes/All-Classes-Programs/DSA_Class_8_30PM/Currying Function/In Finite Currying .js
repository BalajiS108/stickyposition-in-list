function add(x) {
  return function (y) {
    if (!y) {
      return x;
    } else {
      return add(x + y);
    }
  };
}
const result = add(1)(2)(3)(7)();
console.log(result);

function fun(x) {
  return function (y) {
    if (y) {
      return fun(x + y);
    } else {
      return x;
    }
  };
}
result1 = fun(1)(2)();
console.log(result1);
