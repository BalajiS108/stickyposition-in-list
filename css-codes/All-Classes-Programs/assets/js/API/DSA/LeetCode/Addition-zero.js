const fun = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};
console.log(fun([1, 2, 3, 4, -1, 5, -1]));

function findSum2(arrNum) {
  if (!Array.isArray(arrNum)) {
    return console.log("Invalid input.");
  }
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum.includes(-arrNum[i])) {
      return console.log("Pair found: " + arrNum[i] + " & " + -arrNum[i]);
    }
  }

  return console.log("No pair found.");
}
findSum2([1, 2, 3, 4, -2, 5, -1]);
