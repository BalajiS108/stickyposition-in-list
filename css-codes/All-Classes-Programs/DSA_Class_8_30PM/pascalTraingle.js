//     1
//    1 1
//   1 2 1
//  1 3 3 1
function pascalTriangle(n) {
  // let n = 5;
  let arr1 = [];
  let str1 = "";
  for (let i = 0; i < n; i++) {
    let str = "";
    let arr = [];
    for (let j = i + 1; j < n; j++) {
      str = str + " ";
    }
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        arr.push(1);
      } else {
        arr.push(arr1[j] + arr1[j - 1]);
      }
      // console.log({ i, j, arr, arr1 });
      str = str + " " + arr[j];
    }
    arr1 = arr;
    // console.log(str);
    str1 = str1 + str + "\n";
  }
  return str1;
}
console.log(pascalTriangle(6));
