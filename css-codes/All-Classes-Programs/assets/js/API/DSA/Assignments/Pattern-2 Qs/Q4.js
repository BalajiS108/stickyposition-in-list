const starPattern1 = (n) => {
  let result1 = "";

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = i + 1; j < n; j++) {
      str = str + " ";
    }
    for (let j = 0; j <= i; j++) {
      str = str + "*";
    }
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    result1 = result1 + str + "\n";
  }
  //   console.log(result1);

  let result = "";
  for (let i = 1; i < n; i++) {
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
  console.log(result1 + result);
};
starPattern1(5);
