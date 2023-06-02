function fun(str1, str2) {
  let l1 = str1.length;
  let l2 = str2.length;
  str1 = str1.split("");
  str2 = str2.split("");
  if (l1 !== l2) {
    return false;
  }
  let l = l1;
  let count = 0;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      if (str1[i] === str2[j]) {
        // console.log(str1[i], str2[j]);
        count += 1;
        str2.splice(j, 1);
        // console.log(str2[j]);
        j = j - 1;

        break;
      }
    }
  }
  // console.log(count, str1.length);
  if (count === str1.length) {
    return true;
  } else {
    return false;
  }
}
console.log(fun("abcde", "afedc"));
