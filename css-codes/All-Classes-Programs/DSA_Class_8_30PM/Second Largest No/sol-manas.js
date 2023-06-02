const largestNumber = (arr) => {
  let tempobj = { z: 3, a: 1, p: 2 };
  for (let i = 0; i < arr.length; i++) {
    tempobj[arr[i]] = i;
  }
  console.log(tempobj);

  temparr = Object.keys(tempobj);

  return temparr[temparr.length - 2];
};
console.log(largestNumber([41, 2, 3, 4, 5, 6, 7, 12, 40, 33, 10]));
