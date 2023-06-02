var pivotIndex = function (nums) {
  let tSum = 0;
  let lSum = 0;
  let rSum = 0;
  for (let i = 0; i < nums.length; i++) {
    tSum = tSum + nums[i];
  }
  if (tSum - nums[0] === 0) {
    return 0;
  }
  for (let j = 1; j < nums.length; j++) {
    let pivotIndex = j;
    lSum = 0;
    rSum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i < pivotIndex) {
        lSum = nums[i] + lSum;
      }
      if (i > pivotIndex) {
        rSum = rSum + nums[i];
      }
    }
    console.log({ lSum, rSum, pivotIndex });
    if (lSum === rSum) {
      return pivotIndex;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
