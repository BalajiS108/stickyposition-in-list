let starPattern5 = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 1; j < 2; j++) {
      str = str + "*";
    }
    for (let j = 2; j < n; j++) {
      if (i === 0 || i == n - 1) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    for (j = 1; j < 2; j++) {
      str = str + "*";
    }
    console.log(str);
  }
};
starPattern5(5);
