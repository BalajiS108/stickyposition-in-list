var addStrings = function (num1, num2) {
  let l1 = num1.length;
  let l2 = num2.length;
  let l;
  if (l1 > l2) {
    l = l1 - l2;
    for (let i = 0; i < l; i++) {
      num2 = "0" + num2;
    }
  } else {
    l = l2 - l1;
    for (let i = 0; i < l; i++) {
      num1 = "0" + num1;
    }
  }
  let carry = 0;
  let sum = 0;
  let l3 = num1.length;
  let result = "";
  while (l3 > 0) {
    sum = carry;
    sum = sum + (num1[l3 - 1] - "0"); //num1="9998"
    sum = sum + (num2[l3 - 1] - "0"); //num2="546"
    carry = sum > 9 ? 1 : 0;
    sum = sum % 10;
    result = sum + result;
    l3 = l3 - 1;
  }
  if (carry == 1) {
    //9+1   0
    return 1 + result;
  } else {
    return result;
  }
};
console.log(addStrings("546", "9998"));
