function fun(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]] += 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!obj2[str2[i]]) {
      obj2[str2[i]] = 1;
    } else {
      obj2[str2[i]] += 1;
    }
  }
  console.log(obj1);
  console.log(obj2);
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true;
  } else {
    return false;
  }
}
console.log(fun("balaji", "jilaba"));
