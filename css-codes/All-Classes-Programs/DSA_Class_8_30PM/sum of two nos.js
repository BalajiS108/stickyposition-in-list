function sumPair(arr, X) {
  const obj = {};
  const arr1 = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    const pairNo = X - arr[i];
    // console.log(pairNo);
    if (obj.hasOwnProperty(pairNo)) {
      arr1.push([pairNo, arr[i]]);
    }
    obj[arr[i]] = i;
  }
  console.log(arr1);
  console.log(arr1[0]);
}

sumPair([0, 0, 3, 4, 5, 6], 7);
