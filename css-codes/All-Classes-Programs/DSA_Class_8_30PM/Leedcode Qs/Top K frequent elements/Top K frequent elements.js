var topKFrequent = function (nums, k) {
  let obj = {};
  let count = 0;
  let num1 = [];
  let num2 = [];
  let num3 = [];
  for (let i = 0; i < nums.length; i++) {
    if (!obj.hasOwnProperty(nums[i])) {
      count = 1;
      obj[nums[i]] = count;
      num1.push(nums[i]);
    } else {
      count += 1;
      obj[nums[i]] = obj[nums[i]] + 1;
    }
  }
  console.log(obj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      num2.push({ no: parseInt(key), freq: obj[key] });
    }
  }
  console.log({ num2 });
  for (let i = 0; i < num2.length; i++) {
    let temp = 0;
    let temp1 = 0;
    for (let j = i + 1; j < num2.length; j++) {
      if (num2[i].freq < num2[j].freq) {
        temp1 = num2[i].no;
        num2[i].no = num2[j].no;
        num2[j].no = temp1;
      }
    }
  }
  console.log(num2);
  for (let i = 0; i < k; i++) {
    num3.push(num2[i].no);
  }
  console.log(num3);
};

topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 3], 2);
