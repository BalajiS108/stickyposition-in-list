function sumPair(arr, X) {
  const arr1 = [];
  [1, 2][[[]]];
  for (let i = 0; i < arr.length; i++) {
    const obj = {};
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] <= X) {
        const firstTwoNoSum = arr[i] + arr[j];
        const remValue = X - firstTwoNoSum;
        if (obj.hasOwnProperty(remValue)) {
          arr1.push([arr[i], remValue, arr[j]]);
        } else {
          obj[arr[j]] = j;
        }
      }
    }
  }
  console.log(arr1);
  console.log(arr1[0]);
}

sumPair([0, 0, 5, 3, 4, 5, 6], 10);
