let starPattern6 = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = i + 1; j < n; j++) {
      str = str + " ";
    }
    for (let j = 0; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
};
starPattern6(5);
