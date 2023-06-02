const intersectionOfTwoArrays = (arr1, arr2) => {
  let obj1 = {};
  let arr3 = [];
  let obj2 = {};
  let arr4 = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!obj1.hasOwnProperty(arr1[i])) {
      obj1[arr1[i]] = i;
      arr3.push(arr1[i]);
    }
  }
  console.log(arr3);
  for (let j = 0; j < arr2.length; j++) {
    if (!obj2.hasOwnProperty(arr2[j])) {
      obj2[arr2[j]] = j;
    }
  }
  console.log(obj2);
  for (let i = 0; i < arr3.length; i++) {
    if (obj2.hasOwnProperty(arr3[i])) {
      arr4.push(arr3[i]);
    }
  }
  console.log(arr4);
};
intersectionOfTwoArrays(
  [1, 2, 3, 4, 5, 6, 1, 9, 8, 10],
  [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8]
);
