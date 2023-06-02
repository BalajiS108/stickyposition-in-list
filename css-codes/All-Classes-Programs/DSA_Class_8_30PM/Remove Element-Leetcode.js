var removeElement = function (nums, val) {
  let l = nums.length;
  let num1 = [];
  for (let i = 0; i < l; i++) {
    if (nums[i] !== val) {
      num1.push(nums[i]);
    }
  }
  //   console.log(num1);
  l1 = num1.length;
  if (l > l1) {
    l2 = l - l1;
  }
  for (let i = 0; i < l2; i++) {
    num1.push("_");
  }
  //   console.log(num1);
  return num1;
};
console.log(removeElement([3, 2, 2, 3], 3));
