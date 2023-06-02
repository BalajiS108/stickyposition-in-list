const intersectionOfTwoArrays = (arr1, arr2) => {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!obj.hasOwnProperty(arr1[i])) {
      obj[arr1[i]] = i;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!obj.hasOwnProperty(arr2[j])) {
      obj[arr2[j]] = j;
    }
  }

  return Object.keys(obj);
};
console.log(
  intersectionOfTwoArrays(
    [1, 2, 3, 4, 5, 1, 9, 10],
    [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8]
  )
);

// const intersectionOfTwoArraysV2 = (arr1, arr2) => {
//   let obj = {};

//   for (let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
//     if (!obj.hasOwnProperty(arr1[i]) && !obj.hasOwnProperty(undefined)) {
//       obj[arr1[i]] = i;
//     }

//     //   console.log(obj);

//     if (!obj.hasOwnProperty(arr2[j]) && !obj.hasOwnProperty(undefined)) {
//       obj[arr2[j]] = j;
//     }
//   }

//   return Object.keys(obj);
// };
// console.log(
//   intersectionOfTwoArraysV2(
//     [1, 2, 3, 4, 5, 1, 9, 10],
//     [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8]
//   )
// );
