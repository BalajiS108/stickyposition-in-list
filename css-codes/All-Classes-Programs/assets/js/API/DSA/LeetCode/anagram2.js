function fun(str1, str2) {
  let l1 = str1.length;
  let l2 = str2.length;
  let temp1 = "";
  let temp2 = "";
  str2 = str2.split("");
  str1 = str1.split("");
  if (l1 !== l2) {
    return false;
  }
  let l = l1;
  for (let i = 0; i < l; i++) {
    for (let j = i; j < l; j++) {
      if (str1[i] > str1[j]) {
        temp1 = str1[j];
        str1[j] = str1[i];
        str1[i] = temp1;
      }
      if (str2[i] > str2[j]) {
        temp2 = str2[j];
        str2[j] = str2[i];
        str2[i] = temp2;
      }
    }
  }
  str1 = str1.join("");
  str2 = str2.join("");
  console.log(str1);
  console.log(str2);
  if (str2 === str1) {
    return true;
  } else {
    return false;
  }
}
console.log(fun("balaji", "blajib"));
