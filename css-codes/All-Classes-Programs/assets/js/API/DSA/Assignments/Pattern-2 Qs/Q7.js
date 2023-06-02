const starPattern7 = (n) => {
  let result = "";
  for (let i = 0; i < n - 1; i++) {
    let str = "";
    for (let j = 1; j < 2; j++) {
      str = str + "*";
    }
    for (let j = 1; j <= i; j++) {
      if (i === j) {
        str = str + "*";
      } else {
        str = str + " ";
      }
      //   if (i === n - 1) {
      //     str = str + "*";
      //   }
    }
    result = result + str + "\n";
  }
  let str1 = "";
  for (let i = 0; i < n; i++) {
    str1 = str1 + "*";
  }
  //   console.log(str1);
  console.log(result + str1);
};
starPattern7(6);
