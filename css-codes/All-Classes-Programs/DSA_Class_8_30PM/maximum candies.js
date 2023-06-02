var maximumCandies = function (candies, k) {
  let tCount = 0;

  for (let i = 0; i < candies.length; i++) {
    tCount = tCount + candies[i];
  }
  console.log(tCount);
  if (tCount < k) {
    return 0;
  } else {
    while (k > 0) {
      let temp = 0;
      for (let i = 0; i < candies.length; i++) {
        temp = temp + Math.floor(candies[i] / k);
      }
      console.log({ temp });
    }
  }
};

console.log(maximumCandies([6, 8, 5], 3));
