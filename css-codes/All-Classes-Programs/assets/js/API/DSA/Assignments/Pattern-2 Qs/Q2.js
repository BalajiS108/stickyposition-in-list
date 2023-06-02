const starPattern2 = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + " ";
    }
    for (let j = i; j < n; j++) {
      str = str + "*";
    }
    for (let j = i; j < n - 1; j++) {
      str = str + "*";
    }
    result = result + str + "\n";
  }
  return result;
};
console.log(starPattern2(5));
