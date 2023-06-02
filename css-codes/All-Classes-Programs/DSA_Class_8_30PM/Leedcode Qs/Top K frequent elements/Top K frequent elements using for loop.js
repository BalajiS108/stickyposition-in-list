var topKFrequent = function (nums, k) {
  let num1 = [];
  let num2 = [];
  let count;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    count = 1;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === n) {
        count = count + 1;
      }
    }
    num1.push(n);
    num2.push(count);
  }
  console.log({ num1, num2 });
};

topKFrequent([1, 1, 2, 2, 3, 3, 3, 1], 2);
