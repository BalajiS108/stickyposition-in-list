var reverse = function (x) {
  let reverseNo = 0;
  let x1;
  if (x < 0) {
    x1 = Math.abs(x);
  } else {
    x1 = x;
  }
  while (x1 > 0) {
    let remainder = x1 % 10;
    reverseNo = reverseNo * 10 + remainder;
    x1 = Math.floor(x1 / 10);
  }
  if (x < 0) {
    reverseNo = reverseNo * -1;
  }
  if (reverseNo < Math.pow(2, 31) - 1 && reverseNo > Math.pow(-2, 31))
    return reverseNo;
  else {
    return 0;
  }
};

console.log(reverse(1234));
