const starPattern3 = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = i; j < n - 1; j++) {
      str = str + " ";
    }
    for (let j = 1; j < 2; j++) {
      str = str + "*";
    }
    for (let j = 1; j <= i; j++) {
      if (i !== n - 1) {
        str = str + " ";
      } else {
        str = str + "*";
      }
    }
    for (let j = 2; j <= i; j++) {
      if (i !== n - 1) {
        str = str + " ";
      } else {
        str = str + "*";
      }
    }
    for (let j = i; j < i + 1; j++) {
      if (i == 0) {
        str = str + " ";
      } else {
        str = str + "*";
      }
    }
    result = result + str + "\n";
  }

  console.log(result);
};
starPattern3(10);
