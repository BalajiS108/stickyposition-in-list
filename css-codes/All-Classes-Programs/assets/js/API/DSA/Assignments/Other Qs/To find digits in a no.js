const fun = (n) => {
  let count = 0;
  let sum = 0;
  while (n > 0) {
    r = n % 10;
    sum = sum + r;
    n = Math.floor(n / 10);

    count += 1;
    console.log(r);
  }
  return [count, sum];
};

console.log(fun(12345));
