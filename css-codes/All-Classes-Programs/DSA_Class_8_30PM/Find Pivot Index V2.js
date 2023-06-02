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
  for (let i = 1; i < nums.length; i++) {
    lSum = lSum + nums[i - 1];
    rSum = tSum - lSum - nums[i];
    if (lSum === rSum) {
      return i;
    }
  }
  return -1;
};
console.log(pivotIndex([1, 2, 3]));
