function fun(x) {
  return function (y) {
    if (y) {
      return x + y;
    } else {
      return x;
    }
  };
}

console.log(fun(1)(2));
