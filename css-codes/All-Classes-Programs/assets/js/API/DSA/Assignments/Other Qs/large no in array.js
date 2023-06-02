const largeNo = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    largest > arr[i] ? (largest = largest) : (largest = arr[i]);
  }
  return largest;
};
console.log(largeNo([12, 133, 4, 10, 5, 80]));

const largeNoV1 = (arr) => {
  let obj = {};
  for (let i = 1; i < arr.length; i++) {}
  return largest;
};
console.log(largeNoV1([12, 133, 4, 10, 5, 80]));
